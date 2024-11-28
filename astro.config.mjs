import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Mengaktifkan mode SSR
  integrations: [react()],
  adapter: node({
    mode: 'standalone', // Pilihan: standalone atau middleware
  }),
});
