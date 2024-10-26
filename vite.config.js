import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'react-libs': [
            'react-router-dom',
            '@tanstack/react-query',
            'prop-types'
          ],
          tailwind: ['tailwind-merge', 'clsx'],
          ui: ['@headlessui/react', '@heroicons/react'],
          animation: ['framer-motion']
        },
        compact: true
      }
    }
  },
  server: {
    port: 8000
  }
})
