import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "path"; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/global.less";',
      },
    },
  },
})
