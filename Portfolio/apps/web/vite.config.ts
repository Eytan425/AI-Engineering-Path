import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // This ensures it works at your root domain
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
