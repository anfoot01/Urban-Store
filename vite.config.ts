import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
      modules: {
        localsConvention: "camelCase", // Для имен классов в формате camelCase
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://urban-market-enoz.onrender.com',
        changeOrigin: true, // Меняет origin заголовок на target
        rewrite: (path) => path.replace(/^\/api/, ''), // Убирает /api из пути запроса
      },
    },
  },
});
