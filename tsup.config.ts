import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['.temp-esm-src/index.cts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  sourcemap: true,
  tsconfig: './tsconfig.esm.json',
  clean: true,
  splitting: false,
  target: 'node18',
  shims: true,
  esbuildOptions(options) {
    options.resolveExtensions = ['.js', '.ts', '.tsx', '.jsx'];
  },

  dts: true,
});
