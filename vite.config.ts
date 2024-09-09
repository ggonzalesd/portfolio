import path, { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const root = resolve(__dirname, 'src/pages');
const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/dist' : '/portfolio',
  root,
  publicDir,
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 45 },
      jpeg: { quality: 45 },
      jpg: { quality: 45 },
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about/index.html'),
        projects: resolve(root, 'projects/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
