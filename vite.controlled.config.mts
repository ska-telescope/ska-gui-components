import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/controlled.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'controlled.js' : 'controlled.cjs'),
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', 'react-hook-form'],
    },
    sourcemap: true,
  },
  plugins: [react()],
});
