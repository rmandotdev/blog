import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import * as z from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published_date: z.coerce.date(),
  }),
});

export const collections = { posts };
