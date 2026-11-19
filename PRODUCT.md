# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Currently Hugo (0.132.0) with the `hugo-scroll` theme as a git submodule, deployed to Netlify from `public/`. **None of it is a commitment:** the user is willing to replace the whole codebase, including with a non-static (server-rendered or edge) setup.

- **Hosting:** strongly leaning toward moving to **Cloudflare**, where other work is already hosted (tegakko deploys to Cloudflare Pages via wrangler). The Netlify config (`netlify.toml`, `static/_redirects`) is disposable once the move happens. Any `.dev` → `.com` redirects then need re-creating on Cloudflare.
- *Open: which stack. It is undecided, and a recommendation is welcome.*

## Users

A mixed audience; no single group dominates:

- **Recruiters and hiring managers** evaluating Simone for senior backend / cloud roles.
- **Prospective freelance or consulting clients** sizing up whether to bring Simone onto a project.
- **Fellow engineers** arriving from GitHub or elsewhere to see who Simone is and what Simone builds.

All of them arrive with little time and want to answer one question quickly: is this person credible for the kind of work I have in mind? Success is that they get in touch, or follow through to GitHub or LinkedIn.

## Product Purpose

simopzz.com is Simone Pedrazzi's personal calling card on the web: a Senior Engineer working in Python, cloud, and distributed architecture. The site states who Simone is and what Simone is good at, shows a few real projects as proof, and makes getting in touch effortless.

## Positioning

A senior backend engineer whose claims are backed by inspectable work. The projects are public open-source repositories that a visitor can open and read, so the site does not have to rely on adjectives.

## Operating Context

- Visitors often come from a LinkedIn profile, a GitHub profile, a CV link, or a direct referral. Many will be on mobile.
- The canonical domain is `simopzz.com`. `simopzz.dev` and `www.simopzz.dev` 301-redirect to it (`static/_redirects`).

## Capabilities and Constraints

- **Shape:** a single page with a short intro/about, a short write-up for each featured project, and contact. No blog and no multi-page sections.
- **Projects:** two for now, **dandori** and **tegakko** (see Evidence on Hand). Each write-up links to its repo, and dandori also links to its live app. Both are moving targets: dandori is under active development, and tegakko will be heavily refactored. Write-ups should describe purpose and approach rather than details that will go stale, and must be easy to update.
- **Contact:** the public email **pedra89@gmail.com**, shown next to LinkedIn (`linkedin.com/in/simopzz`) and GitHub (`github.com/simopzz`).
- **Language:** English only. Simone is fluent in Italian and English, but no Italian version is planned.
- **SEO:** the main domain's SEO and redirects were just tuned (commit `4cdff6a`). Keep the title and description meta and the canonical domain.

## Brand Commitments

- Name: **Simone Pedrazzi**; handle **simopzz**.
- Professional line: **Senior Engineer — Python, Cloud, Distributed Architecture**.
- Existing assets: a terminal glyph logo (`static/images/terminal-solid-full.svg`), favicons and touch icons in `static/`, and a woods-clearing header photo (`assets/images/woods-clearing.jpg`). These belong to the current implementation; none was declared binding.

## Evidence on Hand

- About-me copy: `content/en/homepage/about-me.md`. It covers FastAPI, PostgreSQL, Docker, Kubernetes, AWS/GCP, microservices, DDD, CI/CD, AI integration, team leadership, and industry experience in AI-driven finance, biotech, and fashion.
- **dandori** — <https://github.com/simopzz/dandori> (public; live at <https://dandori.simopzz.com>, invite-only sign-in by magic link). *Dandori* (段取り) is a meal-planning co-pilot for a few invited users, each cooking for themselves. It plans batch-cooked meals ("cook once, eat three times"), plans per grocery delivery, tracks the kitchen, adapts when the schedule changes, and fills an online supermarket cart without checking out. The agent proposes changes and the user approves them, with a live trace of each agent run. Stack: Go, templ, htmx, PostgreSQL + pgvector on Supabase, and Claude. It has a vision doc, a glossary and ADRs. This is v2, a new codebase, at the walking-skeleton stage with milestone M1 next. A banner image exists at `assets/banner.png` in the repo.
- **tegakko** — <https://github.com/simopzz/tegakko> (**currently private**; the user will make it public, so do not link it until it is public). A Japanese kana handwriting-practice PWA: a prompt, writing on a pressure-sensitive canvas, then self-grading, with card selection biased toward weak spots. It is single-user and local-only with no accounts. Stack: TypeScript (strict), Svelte, Vite and IndexedDB (idb), structured as Ports & Adapters, deployed to Cloudflare Pages. A heavy refactor is planned.
- Facts verified from the repositories on 2026-11-19 and used in the site's revision tables:
  - dandori v1 ran on `main` from 2026-10-21 to 2026-11-03 (its last commit) and is frozen there. v2 started 2026-11-03 on the `v2` branch; its decision records are in `docs/adr`.
  - tegakko's first commit was 2026-09-01. Progress exports and imports as JSON (`src/adapters/io/`). The ports-and-adapters boundary is enforced by `eslint.config.js`.
- Both projects are in Go/TypeScript rather than Python and are personal products, not distributed-systems work. The site should present them truthfully as what they are.
- **Absent; do not fabricate:** testimonials, client or employer logos, metrics or performance numbers, years-of-experience figures, certifications, a photo of Simone.

## Product Principles

1. **Proof over claims.** Each skill the site asserts should be backed by a project a visitor can open.
2. **Fast to judge.** A visitor in any of the three audiences should know who Simone is and what Simone does within seconds, and be one tap from getting in touch.
3. **Minimal by intent.** Stay a single page; add content only when it is real and earns its place.
4. **Credible to engineers.** Technical descriptions must hold up to a peer reading them; no buzzword padding.
