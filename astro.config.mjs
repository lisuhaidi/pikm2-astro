import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import deno from '@deno/astro-adapter';
import swup from '@swup/astro';
import SwupScriptsPlugin from '@swup/scripts-plugin';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Mengaktifkan mode SSR
  integrations: [
    react(),
    // swup({
    //   preload: {
    //     hover: true,   // preload saat link di-hover
    //     visible: true  // preload saat link terlihat
    //   },
    //   cache: true,
    //   progress: true,            // Tampilkan progress bar
    //   smoothScrolling: true,     // Scroll halus
    //   forms: true,               // Tangani form submission
    //   updateHead: true,          // Update tag <head>
    //   reloadScripts: true,       // Reload script setelah navigasi Swup
    //   debug: true,               // Aktifkan debug Swup
    //   plugins: [
    //     new SwupScriptsPlugin({
    //       head: true,
    //       body: true,
    //       optin: true // Hanya skrip tertentu yang dimuat ulang
    //     })
    //   ]
    // })
  ],
  adapter: deno(),
});
