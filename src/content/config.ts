import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    client: z.string(),
    year: z.string(),
    services: z.array(z.string()),
    coverGradient: z.string(),
    galleryImages: z.array(z.string()).optional(),
    websiteUrl: z.string().url().optional()
  })
});

export const collections = {
  projects
};
