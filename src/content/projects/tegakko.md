---
title: tegakko
sheet: 4
drawingTitle: Ports and adapters
links:
  - label: Repository
    href: https://github.com/simopzz/tegakko
    note: private until refactor
    private: true
revisions:
  - rev: A
    date: 2026-09-01
    text: First build. Deployed to Cloudflare Pages; repository private.
pending: Refactor, then publish the repository.
---

A kana handwriting-practice app. A prompt appears, you write the character on a pressure-sensitive canvas, then grade yourself; the next card leans toward your weak spots.

Single user, local only, no accounts: progress lives in IndexedDB and exports as JSON. Built as ports and adapters, with the boundary enforced by lint, so the domain never imports an adapter.
