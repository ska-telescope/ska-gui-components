import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import pkg from './package.json' with { type: 'json' };

const external = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)];

export default defineConfig({
  build: {
    cssCodeSplit: true,

    lib: {
      entry: {
        'ska-gui-components': resolve(import.meta.dirname, './src/index.ts'),
        controlled: resolve(import.meta.dirname, './src/controlled.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },

    rolldownOptions: {
      external: (id) => external.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        assetFileNames: (asset) =>
          asset.names.some((name) => name.endsWith('.css')) ? 'assets/index.css' : 'assets/[name].[ext]',
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

  plugins: [react()],
});
