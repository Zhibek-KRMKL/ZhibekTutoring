import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tutoringZhibek/', // assets folder (or any other images etc) will not work
  plugins: [react()],
})
