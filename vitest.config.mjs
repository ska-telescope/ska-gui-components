import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  define: {
    __GUI_COMPONENTS_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    includeTaskLocation: true,
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
        exclude: ['**/index.ts', '*.t.ts', '*.d.ts', 'rollup.*', 'vite.*', 'vitest.*', '.make/*', '.storybook/*', 'dist/*', 'types/*', 'src/utils/types/*', 'src/services/*', 'src/components/version/*', '**/*.stories.tsx']
      },
    server: {
      deps: {
        inline: ['TreeItem']
      }
    }
  }
});