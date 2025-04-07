import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/404.html', dest: '' }, // Copies 404.html to the root of dist
      ],
    }),
  ],
  base: "/portfolio", // Ensure this matches your GitHub Pages subpath
  build: {
    outDir: "dist", // Default output directory for Vite builds
  },
});