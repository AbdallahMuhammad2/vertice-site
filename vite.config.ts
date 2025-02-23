import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vertice-site/',    // <<--- AJUSTE IMPORTANTE
  build: {
    outDir: 'build',         // se você quer que a pasta final seja "build"
  },
});
