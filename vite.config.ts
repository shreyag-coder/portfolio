import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project-site base for GitHub Pages: https://shreyag-coder.github.io/portfolio/
// Override with VITE_BASE=/ for a custom domain or user site.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/portfolio/',
  plugins: [react(), tailwindcss()],
})
