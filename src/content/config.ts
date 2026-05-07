import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    industry: z.string(),
    client: z.string().optional(),
    challenge: z.string().optional(),
    duration: z.string().optional(),
    featured: z.boolean().default(false),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          context: z.string().optional(),
        }),
      )
      .optional(),
    techStack: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
