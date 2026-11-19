# simopzz.com

Simone Pedrazzi's one-page portfolio, made like a hand-drawn engineering zine: a short intro, things to know, and one sketched system per project. Astro, static output, served by Cloudflare.

## Develop

Tools are managed with [mise](https://mise.jdx.dev). Astro is a project dependency, not a global install: `mise install` sets up the pinned Node and runs `npm install`.

```sh
mise install
mise run dev       # http://localhost:4321, hot reload; `mise run dev -- --host` to open it from a phone
mise run preview   # build, then serve dist/ exactly as it ships
mise run build     # static site in dist/
mise run clean
```

## Edit content

- **Projects:** one Markdown file per project in `src/content/projects/`. Frontmatter holds the page order, the "built with" stack line and the links; the body is the description. A link with `private: true` renders struck through and unlinked. The revision history and pending revision in frontmatter are kept as a record but not shown.
- **Architecture drawings:** `src/drawings/<project>.ts`, with a `wide` (desktop) and a `tall` (phone) layout in SVG user units. The page redraws them in marker.
- **Name, role, email, profile links, things to know:** `src/site.ts` (`about` is the "Things to know" list).

## Deploy (Cloudflare)

- **Site:** a push to `main` builds and deploys via GitHub Actions (`.github/workflows/site.yml`); pull requests only build. `wrangler.jsonc` serves `dist/` as a Worker on the `simopzz.com` custom domain. Manual deploy: `npx wrangler login` once, then `mise run deploy`.
- **DNS and redirects:** `infra/` (OpenTofu) owns both zones, the DNS records, and the 301s from `www.simopzz.com` and `simopzz.dev`. Edit `infra/*.tf`, then:

  ```sh
  read -rs CLOUDFLARE_API_TOKEN && export CLOUDFLARE_API_TOKEN   # the infra token, from the password manager
  mise run infra:plan    # review: a routine change touches only what you edited
  mise run infra:apply
  ```

- **First-time setup** (Porkbun nameservers, Cloudflare tokens, Netlify shutdown): [docs/cloudflare-migration.md](docs/cloudflare-migration.md).

## Infra state

OpenTofu's state (the record of which Cloudflare zones, records and rules `infra/` manages) lives in the private R2 bucket `simopzz-tfstate`, not on disk. Any machine with the infra token sees the same state, so there is no file to back up or restore.

On a fresh clone or a new machine:

```sh
mise install
cp infra/terraform.tfvars.example infra/terraform.tfvars   # paste the account ID (Cloudflare: Account home → ⋯ → Copy account ID)
read -rs CLOUDFLARE_API_TOKEN && export CLOUDFLARE_API_TOKEN
mise run infra:plan                                        # expect: No changes
```

- `infra/tf` runs `tofu` with the R2 credentials derived from `CLOUDFLARE_API_TOKEN`. Use it for anything beyond plan and apply, such as `infra/tf state list` or `infra/tf import`.
- **Never apply a plan that adds things that already exist.** If a plan wants to create the live zones or records, OpenTofu isn't reading the right state: stop and check the bucket.
- R2 keeps no object versions. Before risky state surgery (`state rm`, `import`), take a copy with `infra/tf state pull > /tmp/state.json`.

## Cloudflare tokens

| Token | Lives in | Permissions | Expires |
|---|---|---|---|
| `simopzz infra (OpenTofu)` | password manager; exported only while running `infra:*` | All Domains: Zone, DNS, Zone Settings, Dynamic URL Redirects (Edit). Account: Workers R2 Storage (Edit) | 1 year after creation (Nov 2027) |
| `simopzz site deploy (GitHub Actions)` | repo secret `CLOUDFLARE_API_TOKEN`, next to `CLOUDFLARE_ACCOUNT_ID` | the *Edit Cloudflare Workers* template | never |

- **Renewing the infra token:** before it expires, edit it in the dashboard and move the expiration date out, or create a replacement with the permissions above and save it in the password manager. A new token means new R2 keys, but nothing to update: `infra/tf` derives them on every run.
- **Replacing the deploy token:** create one from the same template, then run `gh secret set CLOUDFLARE_API_TOKEN --repo simopzz/portfolio` from your own terminal and paste it at the prompt.
- **`infra/tf` says the token was rejected:** the shell holds the wrong value (often the deploy token) or the token has expired. Re-run the `read -rs` line.

## Credits

Type: [Caveat Brush](https://fonts.google.com/specimen/Caveat+Brush) for the hand lettering and [Shantell Sans](https://shantellsans.com) for reading text, both SIL OFL, self-hosted in `public/fonts/`.
