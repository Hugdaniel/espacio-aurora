import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/espacioaurora/', // <- Esto le indica a Vite que todos los recursos se carguen relativos a la subcarpeta
})
