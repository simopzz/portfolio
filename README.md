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

`wrangler.jsonc` serves `dist/` as static assets, with `dist/404.html` for missing pages.

```sh
mise run deploy    # build, then wrangler deploy (needs `npx wrangler login` once)
```

Then attach `simopzz.com` as a custom domain on the Worker. Redirecting `simopzz.dev` and `www.simopzz.dev` to `simopzz.com` is a host-level redirect, so it is set up in the Cloudflare dashboard (a Redirect Rule or Bulk Redirect), not in this repo.

## Credits

Lettering: [osifont](https://github.com/hikikomori82/osifont) (ISO 3098), GPL with font exception, self-hosted in `public/fonts/`.
