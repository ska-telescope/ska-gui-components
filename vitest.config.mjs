import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    includeTaskLocation: true,
    globals: true,
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