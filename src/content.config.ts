import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Novexa Team'),
    category: z.enum(['Cybersecurity', 'Programming', 'AI', 'Linux', 'Windows', 'Troubleshooting', 'Tools', 'Research']),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = { blog };
