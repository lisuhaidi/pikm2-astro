import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import deno from '@deno/astro-adapter';


// https://astro.build/config
export default defineConfig({
  output: 'server', // Mengaktifkan mode SSR
  integrations: [
    react(),
  ],
  adapter: deno(),
});
