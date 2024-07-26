import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    host: '0.0.0.0', // Permite accesos desde cualquier IP en la red local
    port: 5175,     // Puerto en el que se está ejecutando el servidor
  }
})
