import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.string().optional(),
    year: z.string().optional(),
    month: z.string().optional(),
    id: z.string().optional(),
    category: z.string().optional(),
    author: z.string().default('مدیریت مهروماه'),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    eventDate: z.string().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  events: eventsCollection,
};
