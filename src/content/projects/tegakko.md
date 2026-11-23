---
title: tegakko
order: 2
drawingTitle: Ports and adapters
stack: TypeScript · Svelte 5 · Vite · IndexedDB · Cloudflare Workers
links:
  - label: Live app
    href: https://tegakko.pedra89.workers.dev
  - label: Repository
    href: https://github.com/simopzz/tegakko
revisions:
  - rev: A
    date: 2026-09-01
    text: First build. Deployed to Cloudflare Pages; repository private.
  - rev: B
    date: 2026-11-23
    text: Refactor; repository now public.
---

A kana handwriting-practice app. A prompt appears, you write the character on a pressure-sensitive canvas, then grade yourself; the next card leans toward your weak spots.

Single user, local only, no accounts: progress lives in IndexedDB and exports as JSON. Built as ports and adapters, with the boundary enforced by lint, so the domain never imports an adapter.
