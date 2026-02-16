import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    cssCodeSplit: true,

    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'ska-gui-components',
      fileName: (format) => `ska-gui-components.${format}.js`,
    },

    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/material/styles',
        '@mui/system',
        '@mui/x-data-grid',
        '@base-ui/react/field',
        '@base-ui/react/number-field',
        '@ska-telescope/ska-javascript-components',
        'react-dropzone',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'assets/[name].[ext]', // <-- ensures CSS is emitted
      },
    },

    sourcemap: true,
    emptyOutDir: true,
  },

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
