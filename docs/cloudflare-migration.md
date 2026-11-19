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

1. Name it `simopzz infra (OpenTofu)`.
2. In the policy's scope dropdown, choose **All Domains**. The default, *Entire Account*, only lists account-wide permissions such as *Account DNS Settings* and *Mass URL Redirects*, none of which are needed. The zones don't exist yet, so a single domain can't be chosen.
3. Tick **Edit**, not Read, on these four:

   | Category | Permission | Used for |
   |---|---|---|
   | DNS & Zones | **Zone** | creating the two zones |
   | DNS & Zones | **DNS** | all records |
   | DNS & Zones | **Zone Settings** | Always Use HTTPS |
   | Rules & Configuration | **Dynamic URL Redirects** | the www and .dev 301s |

4. Set *Token expiration* to 1 year and leave *Client IP address filtering* empty.
5. Click *Review token*. The summary should list exactly those four permissions on All Domains. Then click *Create token*.
6. Save the token in your password manager; Cloudflare shows it once. It is only used from your machine.

**5. Create the deploy API token and hand it to GitHub.**

1. Choose *Create Token*, then *Edit Cloudflare Workers → Use template*.
2. Name it `simopzz site deploy (GitHub Actions)`.
3. Check the two policies the template fills in:
   - *All zones in the account: Workers Routes Write*
   - *Entire account: Workers Scripts Write, Workers KV Storage Write, Account Settings Read* and about 7 more
4. Set expiration to *No expiration*, so deploys don't break silently a year from now. Then *Review token → Create token*.
5. Don't keep a copy anywhere else. From your own terminal (not through an agent session), store it straight as a repo secret, and set the account ID too:

   ```sh
   gh secret set CLOUDFLARE_API_TOKEN --repo simopzz/portfolio     # paste at the prompt
   gh secret set CLOUDFLARE_ACCOUNT_ID --repo simopzz/portfolio --body <account id>
   ```

If the first deploy fails with an authorization error on the custom domain, add *DNS: Edit* for simopzz.com to this token.

## Phase 1: move DNS to Cloudflare (visitors notice nothing)

**6. Create the zones and records.**

```sh
mise install                                   # Node, OpenTofu, npm deps
cp infra/terraform.tfvars.example infra/terraform.tfvars
$EDITOR infra/terraform.tfvars                 # paste account_id; leave netlify_bridge = true
read -rs CLOUDFLARE_API_TOKEN && export CLOUDFLARE_API_TOKEN   # paste the infra token (step 4): no echo, no history
mise run infra:plan                            # expect: Plan: 19 to add, 0 to change, 0 to destroy
mise run infra:apply
```

The output prints two nameservers per domain, which are usually the same pair. The zones show as `pending`.

With `netlify_bridge = true`, simopzz.com stays a DNS-only CNAME to the Netlify site, so nothing changes for visitors.

The records can't be checked over DNS yet: Cloudflare answers `SERVFAIL` for a zone until it is active. To review them, open the Cloudflare dashboard (*simopzz.com → DNS → Records*).

**7. Point Porkbun at Cloudflare.** In Porkbun, open *Domain Management → simopzz.com → Authoritative Nameservers → Edit*. Delete the four `*.ns.porkbun.com` entries and enter the two Cloudflare nameservers from the output. Repeat for simopzz.dev.

**8. Wait for the zones to go active.** This usually takes minutes, and up to 24 hours. Cloudflare emails you when each zone is active. To check by hand:

Some routers and ISPs intercept plain DNS queries (port 53) and answer them from their own cache, so `dig` can show stale or wrong answers. Query over HTTPS instead:

```sh
doh() { curl -s "https://cloudflare-dns.com/dns-query?name=$1&type=$2" -H 'accept: application/dns-json' \
  | python3 -c 'import sys,json; print([a["data"] for a in json.load(sys.stdin).get("Answer", [])])'; }
doh simopzz.com NS      # malcolm/monroe.ns.cloudflare.com once switched
doh simopzz.dev NS
cd infra && tofu refresh && tofu output zone_status   # "active" once Cloudflare has seen the switch
```

**9. Verify, still on the old site.** `curl --doh-url` resolves over HTTPS, so a DNS-intercepting router can't skew the result:

```sh
c() { curl -s -o /dev/null --doh-url https://cloudflare-dns.com/dns-query -w '%{http_code} %{redirect_url} server=%header{server}\n' "$1"; }
c https://simopzz.com/                  # 200 server=Netlify (the bridge)
c 'https://www.simopzz.com/x?y=1'       # 301 https://simopzz.com/x?y=1 server=cloudflare
c 'https://simopzz.dev/x?y=1'           # 301 https://simopzz.com/x?y=1 server=cloudflare
c https://dandori.simopzz.com/healthz   # 200
```

For about 10 minutes after activation, some answers still come from Netlify while resolver caches expire (the Porkbun records had a 600-second TTL).

Request a dandori magic link to confirm Resend still sends. The MX/SPF records are Porkbun's defaults: mail is only forwarded if a forward exists under *Domain Management → Email Forwarding*. If one does, send a test to it. Forwarding depends only on the MX records, which are unchanged, but confirm it before relying on it.

## Phase 2: cut over to the new site (about a minute of downtime)

**10. Check the deploy secrets.** `gh secret list --repo simopzz/portfolio` should show `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` (set in step 5).

**11. Stop Netlify from building.** In Netlify, open *Site configuration → Build & deploy → Continuous deployment* and either *Stop builds* or unlink the repository.

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
