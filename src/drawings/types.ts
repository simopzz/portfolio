export type Text = { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' };

export type Shape =
  | { kind: 'box'; x: number; y: number; w: number; h: number; label: string; sub?: string; dashed?: boolean; rows?: string[]; head?: number }
  | { kind: 'db'; x: number; y: number; w: number; h: number; label: string; sub?: string }
  | { kind: 'hex'; cx: number; cy: number; r: number; label: string; lines?: string[] }
  | { kind: 'port'; x: number; y: number };

export type Link = { d: string; label?: Text; arrow?: boolean; dashed?: boolean };

export type Layout = {
  w: number;
  h: number;
  /** text scale; tall (phone) layouts set type larger to survive the smaller render */
  fs?: number;
  boundary?: { x: number; y: number; w: number; h: number; label?: Text; note?: Text };
  shapes: Shape[];
  links: Link[];
  /** redline revision clouds around pending work, each with its tag */
  clouds?: { x: number; y: number; w: number; h: number; tag: Text }[];
};

export type Drawing = { wide: Layout; tall: Layout };
