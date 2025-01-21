import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root base path for Netlify
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5173       // Keep this consistent with your current port
  }
}
)
