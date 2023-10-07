import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  works: worksCollection,
};
