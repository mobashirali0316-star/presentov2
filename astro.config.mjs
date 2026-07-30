// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mobashirali0316-star.github.io',
  base: process.env.GITHUB_ACTIONS ? '/Presento' : '/',
  vite: {
    plugins: [tailwind()],
  },
});
