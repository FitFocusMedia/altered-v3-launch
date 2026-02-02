import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGHPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGHPages ? '/altered-v3-launch/' : '/',
  server: {
    port: 5191,
    host: true
  }
})
