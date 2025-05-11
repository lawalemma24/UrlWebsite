import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()] // Add this configuration
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  base: './'
})
