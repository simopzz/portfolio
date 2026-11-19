import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kanji: z.string().optional(),
    /** position on the page, lowest first */
    order: z.number(),
    drawingTitle: z.string(),
    /** the "built with" line, technologies separated by middle dots */
    stack: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string().url(),
        note: z.string().optional(),
        /** shown struck through, not linked, until the repo is public */
        private: z.boolean().default(false),
      }),
    ),
    revisions: z.array(
      z.object({ rev: z.string(), date: z.coerce.date().transform((d) => d.toISOString().slice(0, 10)), text: z.string() }),
    ),
    pending: z.string().optional(),
  }),
});

export const collections = { projects };
