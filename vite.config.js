import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `
          @use "@/assets/scss/variables" as *;
          @use "@/assets/scss/mixins" as *;
          @use "@/assets/scss/extends" as *;
        `,
      },
    },
  },
  server: {
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
  },
});
