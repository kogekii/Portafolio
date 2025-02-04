import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],
  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),
});