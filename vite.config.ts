import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // Shown on the page so you can tell which build is deployed.
  define: {
    __BUILD_INFO__: JSON.stringify({
      commit: process.env.GITHUB_SHA ?? 'local',
      builtAt: new Date().toISOString(),
    }),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
