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
- **DNS and redirects:** `infra/` (OpenTofu) owns both zones, the DNS records, and the 301s from `www.simopzz.com` and `simopzz.dev`. `mise run infra:plan` / `mise run infra:apply` with `CLOUDFLARE_API_TOKEN` exported.
- **First-time setup** (Porkbun nameservers, Cloudflare tokens, Netlify shutdown): [docs/cloudflare-migration.md](docs/cloudflare-migration.md).

## Credits

Lettering: [osifont](https://github.com/hikikomori82/osifont) (ISO 3098), GPL with font exception, self-hosted in `public/fonts/`.
