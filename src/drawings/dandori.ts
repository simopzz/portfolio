import type { Drawing } from './types';

const rows = [
  'TODAY — WHAT TO EAT, COOK, THAW',
  'CYCLE — ONE PLAN PER DELIVERY',
  'KITCHEN LEDGER',
  'AGENT PROPOSES, USER APPROVES',
];

export const dandori: Drawing = {
  wide: {
    w: 960,
    h: 540,
    fs: 1.25,
    shapes: [
      { kind: 'box', x: 16, y: 168, w: 164, h: 90, label: 'INVITED USER', sub: 'browser · phone' },
      { kind: 'box', x: 260, y: 110, w: 340, h: 320, label: 'DANDORI', sub: 'go · templ · htmx', head: 72, rows },
      { kind: 'box', x: 710, y: 40, w: 234, h: 76, label: 'CLAUDE', sub: 'anthropic api', dashed: true },
      { kind: 'db', x: 710, y: 170, w: 234, h: 120, label: 'POSTGRESQL', sub: 'pgvector · supabase' },
      { kind: 'box', x: 710, y: 340, w: 234, h: 66, label: 'SUPABASE AUTH', sub: 'magic link', dashed: true },
      { kind: 'box', x: 710, y: 444, w: 234, h: 66, label: 'SUPERMARKET CART', sub: 'filled, never checked out', dashed: true },
    ],
    links: [
      { d: 'M180 213 H260', arrow: true, label: { x: 220, y: 201, text: 'HTTPS' } },
      { d: 'M560 110 V78 H710', arrow: true, label: { x: 640, y: 68, text: 'AGENT RUNS' } },
      { d: 'M600 230 H710', arrow: true, label: { x: 655, y: 220, text: 'SQL' } },
      { d: 'M600 337 H670 V373 H710', arrow: true, label: { x: 635, y: 327, text: 'SIGN-IN' } },
      { d: 'M600 410 H618 V477 H710', arrow: true, label: { x: 626, y: 467, text: 'CART FILL', anchor: 'start' } },
    ],
  },
  tall: {
    w: 360,
    h: 760,
    fs: 1.15,
    shapes: [
      { kind: 'box', x: 90, y: 6, w: 180, h: 70, label: 'INVITED USER', sub: 'browser · phone' },
      { kind: 'box', x: 34, y: 118, w: 320, h: 300, label: 'DANDORI', sub: 'go · templ · htmx', head: 72, rows },
      { kind: 'box', x: 60, y: 456, w: 294, h: 58, label: 'CLAUDE', sub: 'anthropic api', dashed: true },
      { kind: 'db', x: 60, y: 528, w: 294, h: 84, label: 'POSTGRESQL', sub: 'pgvector · supabase' },
      { kind: 'box', x: 60, y: 626, w: 294, h: 58, label: 'SUPABASE AUTH', sub: 'magic link', dashed: true },
      { kind: 'box', x: 60, y: 698, w: 294, h: 58, label: 'SUPERMARKET CART', sub: 'filled, never checked out', dashed: true },
    ],
    links: [
      { d: 'M180 76 V118', arrow: true, label: { x: 190, y: 102, text: 'HTTPS · HTMX', anchor: 'start' } },
      { d: 'M34 390 H14 V727' },
      { d: 'M14 485 H60', arrow: true },
      { d: 'M14 570 H60', arrow: true },
      { d: 'M14 655 H60', arrow: true },
      { d: 'M14 727 H60', arrow: true },
    ],
  },
};
