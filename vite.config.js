import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps every asset path relative, so the built site works from any
// folder or sub-path (and even when dist/index.html is opened directly).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
