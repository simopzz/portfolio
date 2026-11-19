# simopzz.com

Simone Pedrazzi's one-page portfolio, built as an engineering drawing set: a cover, general notes, and one sheet per project. Astro, static output, served by Cloudflare.

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

- **Projects:** one Markdown file per sheet in `src/content/projects/`. Frontmatter holds the sheet number, links, revision table and the pending revision; the body is the description. A link with `private: true` renders struck through and unlinked.
- **Architecture drawings:** `src/drawings/<project>.ts`, with a `wide` (desktop) and a `tall` (phone) layout in SVG user units.
- **Name, role, email, profile links, site revision:** `src/site.ts`.
- **General notes:** the `notes` list in `src/pages/index.astro`.

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

- `infra/tf` runs `tofu` with the R2 credentials derived from `CLOUDFLARE_API_TOKEN`. Use it for anything beyond plan and apply, such as `infra/tf state list` or `infra/tf import`.
- A fresh clone needs only `infra/terraform.tfvars` (just the account ID; see the `.example`) and the exported token.
- **Never apply a plan that adds things that already exist.** If a plan wants to create the live zones or records, OpenTofu isn't reading the right state: stop and check the bucket.
- R2 keeps no object versions. Before risky state surgery (`state rm`, `import`), take a copy with `infra/tf state pull > /tmp/state.json`.

## Credits

Lettering: [osifont](https://github.com/hikikomori82/osifont) (ISO 3098), GPL with font exception, self-hosted in `public/fonts/`.
