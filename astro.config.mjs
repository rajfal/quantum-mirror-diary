// astro.config.mjs

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://quantum.agenticreports.com', // Later update this to your real domain!
  output: 'server', // Important for Netlify serverless functions
  adapter: netlify(),

  server: {
    host: process.env.HOST ?? '127.0.0.1',
    port: Number(process.env.PORT) || 3000
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  }
});

