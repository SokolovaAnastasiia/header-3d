import { defineConfig } from 'vite';

export default defineConfig({
  base: '/header-3d/', // Убедись, что base правильный для GitHub Pages
  publicDir: 'public', // publicDir остаётся для моделей
  server: {
    open: true, // Автооткрытие браузера
  },
  build: {
  },
});