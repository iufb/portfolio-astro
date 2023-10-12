import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  works: worksCollection,
};
