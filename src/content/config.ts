import { defineCollection, z } from 'astro:content';


const depins = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: z.enum(["active", "watching", "dropped"]),
    joined: z.string(),
    left: z.string().nullable(),
    category: z.string(),
    referral: z.string(),
    tokensHeld: z.number(),
    tradeable: z.boolean(),
    dailyTasks: z.array(z.string()),
    weeklyTasks: z.array(z.string()),
    description: z.string(),
    investment: z.object({
      usd: z.number(),
      deviceCount: z.number(),
    }),
    maintenance: z.string(),
    satisfaction: z.string(),
  }),
});

const tasks = defineCollection({
  schema: z.object({
    title: z.string()
  }),
});

const diarySchema = z.object({
  title: z.string(),
  date: z.string(), // Or z.date() if you're using ISO date format
});

const hooksSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const manualCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  'present-reality': defineCollection({ schema: diarySchema }),
  'future-echo': defineCollection({ schema: diarySchema }),
  'reflection-point': defineCollection({ schema: diarySchema }),
  'hooks': defineCollection({ schema: hooksSchema }),
  'manual': manualCollection
};
