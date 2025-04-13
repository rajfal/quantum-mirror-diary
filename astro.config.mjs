// astro.config.mjs
//trailingSlash: 'always',

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://127.0.0.1:3000',
  
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
