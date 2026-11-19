import type { Drawing } from './types';

const domain = ['DRILL · SESSION · TALLY', 'SELF-GRADING', 'WEAK-SPOT SELECTION'];

// Pointy-top hexagon: wide layout centre (480,275) r150; tall layout centre (180,270) r110.
export const tegakko: Drawing = {
  wide: {
    w: 960,
    h: 540,
    fs: 1.25,
    boundary: {
      x: 12, y: 12, w: 936, h: 516,
      label: { x: 28, y: 38, text: 'PWA · SINGLE USER · LOCAL ONLY · CLOUDFLARE PAGES' },
      note: { x: 932, y: 38, text: 'DOMAIN NEVER IMPORTS ADAPTERS — LINT-ENFORCED', anchor: 'end' },
    },
    shapes: [
      { kind: 'hex', cx: 480, cy: 275, r: 150, label: 'DOMAIN', lines: domain },
      { kind: 'box', x: 370, y: 56, w: 220, h: 56, label: 'SVELTE UI', sub: 'drill · history · settings' },
      { kind: 'box', x: 36, y: 235, w: 228, h: 80, label: 'CANVAS INK SURFACE', sub: 'pressure-sensitive' },
      { kind: 'db', x: 716, y: 215, w: 216, h: 110, label: 'INDEXEDDB', sub: 'idb repositories' },
      { kind: 'box', x: 120, y: 420, w: 220, h: 66, label: 'CARD CONTENT', sub: 'kana card repository' },
      { kind: 'box', x: 600, y: 420, w: 260, h: 66, label: 'JSON EXPORT · IMPORT', sub: 'progress backup' },
      { kind: 'box', x: 405, y: 458, w: 150, h: 52, label: 'APP', sub: 'wires adapters' },
      { kind: 'port', x: 480, y: 125 },
      { kind: 'port', x: 350, y: 275 },
      { kind: 'port', x: 610, y: 270 },
      { kind: 'port', x: 415, y: 387.5 },
      { kind: 'port', x: 545, y: 387.5 },
    ],
    links: [
      { d: 'M480 112 V119' },
      { d: 'M264 275 H344', label: { x: 304, y: 263, text: 'STROKES' } },
      { d: 'M716 270 H616', label: { x: 666, y: 258, text: 'ATTEMPTS' } },
      { d: 'M230 420 V387.5 H409' },
      { d: 'M730 420 V387.5 H551' },
      { d: 'M480 458 V425', dashed: true },
    ],
  },
  tall: {
    w: 360,
    h: 820,
    fs: 1.15,
    boundary: {
      x: 4, y: 4, w: 352, h: 812,
      label: { x: 16, y: 28, text: 'PWA · LOCAL ONLY' },
    },
    shapes: [
      { kind: 'hex', cx: 180, cy: 270, r: 110, label: 'DOMAIN', lines: domain },
      { kind: 'box', x: 100, y: 52, w: 160, h: 56, label: 'SVELTE UI', sub: 'drill · history' },
      { kind: 'port', x: 180, y: 160 },
      { kind: 'port', x: 85, y: 270 },
      { kind: 'port', x: 275, y: 270 },
      { kind: 'port', x: 132.5, y: 352.5 },
      { kind: 'port', x: 227.5, y: 352.5 },
      { kind: 'box', x: 50, y: 440, w: 260, h: 56, label: 'CARD CONTENT', sub: 'kana card repository' },
      { kind: 'box', x: 50, y: 516, w: 260, h: 56, label: 'CANVAS INK SURFACE', sub: 'pressure-sensitive' },
      { kind: 'box', x: 50, y: 592, w: 260, h: 56, label: 'JSON EXPORT · IMPORT', sub: 'progress backup' },
      { kind: 'db', x: 50, y: 668, w: 260, h: 76, label: 'INDEXEDDB', sub: 'idb repositories' },
      { kind: 'box', x: 100, y: 760, w: 160, h: 48, label: 'APP', sub: 'wires adapters' },
    ],
    links: [
      { d: 'M180 108 V154' },
      { d: 'M132.5 358 V410 H36 V468 H50' },
      { d: 'M79 270 H22 V544 H50' },
      { d: 'M227.5 358 V410 H324 V620 H310' },
      { d: 'M281 270 H338 V706 H310' },
    ],
  },
};
