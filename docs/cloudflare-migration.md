# Moving simopzz.com from Netlify to Cloudflare

A one-time runbook. Porkbun stays the registrar; only the nameservers move. Cloudflare then serves DNS for both domains, runs the site as a Worker, and handles the `www` and `simopzz.dev` redirects.

The site stays up the whole time, except for about a minute in step 12.

| What | Before | After |
|---|---|---|
| Registrar | Porkbun | Porkbun (unchanged) |
| DNS for simopzz.com, simopzz.dev | Porkbun | Cloudflare, managed in `infra/` |
| simopzz.com | Netlify (Hugo) | Cloudflare Worker (this repo), deployed by GitHub Actions |
| www.simopzz.com, simopzz.dev, www.simopzz.dev | Netlify redirect | Cloudflare redirect rules, 301 to simopzz.com |
| dandori.simopzz.com | Hetzner server | unchanged (same A/AAAA records, not proxied) |
| Email forwarding | Porkbun | unchanged (same MX/SPF/DMARC records) |

## Phase 0: prepare (nothing changes yet)

**1. Compare DNS records.** In Porkbun, open *Domain Management → simopzz.com → DNS* and list every record. Do the same for simopzz.dev. Each one must also be in `infra/dns.tf`.

- `dns.tf` already holds everything public DNS showed on 2026-11-19: the Netlify apex and www records, dandori A/AAAA, MX `fwd1`/`fwd2.porkbun.com`, SPF, and `_dmarc`.
- Look especially for records public lookups can't reveal, such as other subdomains, DKIM keys, or verification TXT records (Google, GitHub). Add any you find to `dns.tf`.
- Skip records that point at Netlify. The infra replaces them.

**2. Check DNSSEC.** In Porkbun, check *Domain Management → simopzz.com → DNSSEC*. If it is on, turn it off for both domains now, then wait a day. If DS records still point at Porkbun's keys when the nameservers change, the domain stops resolving.

**3. Get your Cloudflare account ID.** In the dashboard, open *Account home*, then the menu next to the account name, then *Copy account ID*.

**4. Create the infra API token.** In the dashboard, go to *My Profile → API Tokens → Create Token → Create Custom Token*.

- Name it `simopzz infra (OpenTofu)`.
- Add these zone permissions, all set to Edit:
  - *Zone → Zone*
  - *Zone → DNS*
  - *Zone → Zone Settings*
  - *Zone → Dynamic URL Redirects*
- Set *Account resources* to your account.
- Set *Zone resources* to *All zones from an account*, your account. The zones don't exist yet, so a specific-zone scope can't be chosen.
- Keep the token in your password manager. It is only used from your machine.

**5. Create the deploy API token.** Choose *Create Token* and start from the *Edit Cloudflare Workers* template.

- Set *Account resources* to your account.
- Set *Zone resources* to *All zones from an account*. You can narrow it to `simopzz.com` after phase 1.
- Name it `simopzz site deploy (GitHub Actions)`.
- Custom domains also touch DNS. If the first deploy fails with an authorization error on the domain, add *Zone → DNS → Edit* for simopzz.com to this token.

## Phase 1: move DNS to Cloudflare (visitors notice nothing)

**6. Create the zones and records.**

```sh
mise install                                   # Node, OpenTofu, npm deps
cp infra/terraform.tfvars.example infra/terraform.tfvars
$EDITOR infra/terraform.tfvars                 # paste account_id; leave netlify_bridge = true
export CLOUDFLARE_API_TOKEN=<infra token from step 4>
mise run infra:plan                            # read it: 2 zones, records, 2 rulesets, 2 settings
mise run infra:apply
```

The output prints two nameservers per domain, which are usually the same pair. The zones show as `pending`.

With `netlify_bridge = true`, simopzz.com stays a DNS-only CNAME to the Netlify site, so nothing changes for visitors.

**7. Point Porkbun at Cloudflare.** In Porkbun, open *Domain Management → simopzz.com → Authoritative Nameservers → Edit*. Delete the four `*.ns.porkbun.com` entries and enter the two Cloudflare nameservers from the output. Repeat for simopzz.dev.

**8. Wait for the zones to go active.** This usually takes minutes, and up to 24 hours. Cloudflare emails you when each zone is active. To check by hand:

```sh
dig +short NS simopzz.com                      # shows the Cloudflare nameservers once switched
cd infra && tofu refresh && tofu output zone_status
```

**9. Verify, still on the old site:**

```sh
curl -sI https://simopzz.com | head -1                    # 200, still Netlify
curl -sI https://www.simopzz.com/x?y=1 | grep -i location  # https://simopzz.com/x?y=1
curl -sI https://simopzz.dev/x | grep -i location          # https://simopzz.com/x
curl -sI https://dandori.simopzz.com | head -1             # as before
```

Also send a test email to any simopzz.com address that Porkbun forwards. Forwarding depends only on the MX records, which are unchanged, but confirm it before relying on it.

## Phase 2: cut over to the new site (about a minute of downtime)

**10. Add the deploy secrets to GitHub:**

```sh
gh secret set CLOUDFLARE_API_TOKEN     # deploy token from step 5
gh secret set CLOUDFLARE_ACCOUNT_ID
```

**11. Stop Netlify from building.** In Netlify, open *Site configuration → Build & deploy → Continuous deployment → Stop builds*.

- Do this before the merge in step 12. Otherwise Netlify would try to build the Astro branch as Hugo and email you a failure.
- The currently published Netlify deploy keeps serving through the bridge.

**12. Cut over.** Do (a) and (b) back to back.

- a. In `infra/terraform.tfvars`, set `netlify_bridge = false`, then run `mise run infra:apply`. This removes the CNAME that points the apex at Netlify. simopzz.com stops resolving until (b) completes.
- b. Merge the `astro-cloudflare` pull request into `main`. The *Site* workflow builds and runs `wrangler deploy`. The first deploy creates the Worker, attaches simopzz.com as its custom domain, creates the DNS record and issues the certificate.
  - For speed, you can deploy from your machine first with `npx wrangler login && mise run deploy`, then merge.

**13. Verify:**

```sh
curl -sI https://simopzz.com | head -1                    # 200 from Cloudflare
curl -s https://simopzz.com | grep -o '<title>[^<]*'      # Simone Pedrazzi - Senior Engineer
curl -sI https://simopzz.com/missing | head -1            # 404, drawing-set "Sheet not found" page
curl -sI http://simopzz.com | grep -i location            # https:// (Always Use HTTPS)
```

**Rollback (only while the Netlify site still exists):**

1. Remove the Worker's domain in *Workers & Pages → simopzz-com → Settings → Domains & Routes*.
2. Set `netlify_bridge = true`, then run `mise run infra:apply`.

## Phase 3: clean up

**14. Netlify.**

- In *Domain management*, remove simopzz.com, www.simopzz.com and the simopzz.dev aliases.
- Delete the site under *Site configuration → General → Danger zone → Delete this site*.
- In GitHub, open *Settings → Applications → Installed GitHub Apps → Netlify*. Remove this repo's access, or uninstall the app if nothing else uses it.

**15. Porkbun.** The DNS records still listed at Porkbun are inert now, so delete them or leave them. Keep auto-renew on for both domains, because Porkbun is still the registrar.

**16. DNSSEC (optional).** In Cloudflare, open *simopzz.com → DNS → Settings → Enable DNSSEC*. Copy the DS record into Porkbun under *Domain Management → DNSSEC*. Repeat for simopzz.dev.

**17. Narrow the deploy token (optional).** Edit the token from step 5 so its zone resources are only simopzz.com.

## Day to day afterwards

- **Site changes:** push to `main`. GitHub Actions builds and deploys. Pull requests build and check `infra/` without deploying.
- **DNS or redirect changes:** edit `infra/`, then run `mise run infra:plan` and `mise run infra:apply` with the infra token exported.
- **State:** OpenTofu keeps its state in `infra/terraform.tfstate`, which is gitignored and holds no secrets. Back it up after each apply. If it is ever lost, re-import the resources with `tofu import` rather than letting OpenTofu recreate zones that already exist.
