import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/test/', // No sub-path, this runs directly at root: debtx.slt.lk
})
