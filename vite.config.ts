import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/main.ts'],
      formats: ['umd', 'es'],
      name: 'SvelteFlow',
      fileName: 'svelte-flow',
    },
  },
  plugins: [svelte()],
})
