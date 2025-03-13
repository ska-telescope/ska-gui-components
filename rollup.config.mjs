import { defineConfig } from 'rollup'

// We'll use this plugin to generate the .d.ts files
import dts from 'rollup-plugin-dts'

// We'll use this plugin to transpile our TypeScript code
import pluginTs from '@rollup/plugin-typescript'

// Add support for CSS
import postcss from 'rollup-plugin-postcss';

// We'll use this plugin to minify our code
import terser from '@rollup/plugin-terser'

// Some constants that we'll use later
const input = 'src/index.ts'
const external = ['react', 'react-dom', 'react/jsx-runtime']
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'jsxRuntime',
}

export default defineConfig([
  {
    input,
    output: [
      {
        file: 'dist/ska-gui-components.min.mjs',
        format: 'es',
        globals,
        sourcemap: true,
      },
    ],
    external,
    plugins: [postcss(), pluginTs(), terser()],
  },
  {
    input,
    output: [
      { format: 'es', file: 'dist/ska-gui-components.d.mts' },
    ],
    external,
    plugins: [dts()],
  },
])