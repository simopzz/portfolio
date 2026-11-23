# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output, served by Cloudflare as a Worker on the `simopzz.com` custom domain; a push to `main` builds and deploys through GitHub Actions. DNS and redirects are managed with OpenTofu in `infra/`. See README.md for day-to-day operations.

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
- The canonical domain is `simopzz.com`. `www.simopzz.com` and `simopzz.dev` 301-redirect to it (Cloudflare redirect rules in `infra/`).

## Capabilities and Constraints

- **Shape:** a single page with a short intro/about, a short write-up for each featured project, and contact. No blog and no multi-page sections.
- **Projects:** two for now, **dandori** and **tegakko** (see Evidence on Hand). Each write-up links to its repo and its live app. Both are moving targets: dandori is under active development, and tegakko was refactored and made public in 2026-11. Write-ups should describe purpose and approach rather than details that will go stale, and must be easy to update.
- **Contact:** the public email **pedra89@gmail.com**, shown next to LinkedIn (`linkedin.com/in/simopzz`) and GitHub (`github.com/simopzz`).
- **Language:** English only. Simone is fluent in Italian and English, but no Italian version is planned.
- **SEO:** the main domain's SEO and redirects were just tuned (commit `4cdff6a`). Keep the title and description meta and the canonical domain.

## Brand Commitments

- Name: **Simone Pedrazzi**; handle **simopzz**.
- Professional line: **Senior Engineer — Python, Cloud, Distributed Architecture**.
- Existing assets: an "SP" monogram favicon and touch icons in `public/`. They belong to the current implementation; none was declared binding.

## Evidence on Hand

- About-me copy: `content/en/homepage/about-me.md`. It covers FastAPI, PostgreSQL, Docker, Kubernetes, AWS/GCP, microservices, DDD, CI/CD, AI integration, team leadership, and industry experience in AI-driven finance, biotech, and fashion.
- **dandori** — <https://github.com/simopzz/dandori> (public; live at <https://dandori.simopzz.com>, invite-only sign-in by magic link). *Dandori* (段取り) is a meal-planning co-pilot for a few invited users, each cooking for themselves. It plans batch-cooked meals ("cook once, eat three times"), plans per grocery delivery, tracks the kitchen, adapts when the schedule changes, and fills an online supermarket cart without checking out. The agent proposes changes and the user approves them, with a live trace of each agent run. Stack: Go, templ, htmx, PostgreSQL + pgvector on Supabase, and Claude. It has a vision doc, a glossary and ADRs. This is v2, a new codebase, at the walking-skeleton stage with milestone M1 next. A banner image exists at `assets/banner.png` in the repo.
- **tegakko** — <https://github.com/simopzz/tegakko> (public; live at <https://tegakko.pedra89.workers.dev>). A Japanese kana handwriting-practice PWA: a prompt, writing on a pressure-sensitive canvas, then self-grading, with card selection biased toward weak spots. It is single-user and local-only with no accounts. Stack: TypeScript (strict), Svelte 5, Vite and IndexedDB (idb), structured as Ports & Adapters, deployed to Cloudflare Workers. It was refactored in 2026-11; its design doc and ADRs are in the repo.
- Facts verified from the repositories on 2026-11-19 (kept in each project's frontmatter as its revision record; the page does not currently show them):
  - dandori v1 ran on `main` from 2026-10-21 to 2026-11-03 (its last commit) and is frozen there. v2 started 2026-11-03 on the `v2` branch; its decision records are in `docs/adr`.
  - tegakko's first commit was 2026-09-01. Progress exports and imports as JSON (`src/adapters/io/`). The ports-and-adapters boundary is enforced by `eslint.config.js`.
- Both projects are in Go/TypeScript rather than Python and are personal products, not distributed-systems work. The site should present them truthfully as what they are.
- **Absent; do not fabricate:** testimonials, client or employer logos, metrics or performance numbers, years-of-experience figures, certifications, a photo of Simone.

## Product Principles

1. **Proof over claims.** Each skill the site asserts should be backed by a project a visitor can open.
2. **Fast to judge.** A visitor in any of the three audiences should know who Simone is and what Simone does within seconds, and be one tap from getting in touch.
3. **Minimal by intent.** Stay a single page; add content only when it is real and earns its place.
4. **Credible to engineers.** Technical descriptions must hold up to a peer reading them; no buzzword padding.
