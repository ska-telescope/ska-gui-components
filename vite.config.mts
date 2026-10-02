import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import pkg from './package.json';

const external = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];

export default defineConfig({
  build: {
    cssCodeSplit: true,

    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: (format) => `ska-gui-components.${format}.js`,
    },

    rollupOptions: {
      external: (id) => external.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        assetFileNames: 'assets/[name].[ext]', // <-- ensures CSS is emitted
      },
    },

    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  plugins: [
    react()
  ],
});
