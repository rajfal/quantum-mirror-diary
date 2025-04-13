import { defineCollection, z } from 'astro:content';

const diarySchema = z.object({
  title: z.string(),
  date: z.string(), // Or z.date() if you're using ISO date format
});

const hooksSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const collections = {
  'present-reality': defineCollection({ schema: diarySchema }),
  'future-echo': defineCollection({ schema: diarySchema }),
  'reflection-point': defineCollection({ schema: diarySchema }),
  'hooks': defineCollection({ schema: hooksSchema }),
};
