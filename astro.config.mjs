import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mehromahqazvin.ir',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  integrations: [sitemap()],
  redirects: {
    '/introduction.html': '/introduction/',
    '/features.html': '/features/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  trailingSlash: 'always',
});
