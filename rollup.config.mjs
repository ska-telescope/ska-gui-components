import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import pluginTs from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'

const input = 'src/index.ts'

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@mui/material',
  '@mui/material/styles',
  '@mui/system',
  '@mui/x-data-grid',
  '@base-ui/react/field',
  '@base-ui/react/number-field',
  '@ska-telescope/ska-javascript-components',
  'react-dropzone',
]

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'jsxRuntime',
}

export default defineConfig([
  // ------------------------------------------------------------
  // JS BUNDLE (handles CSS modules)
  // ------------------------------------------------------------
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
    plugins: [
      postcss({
        modules: true,
        extract: true,
        minimize: true,
      }),
      pluginTs(),
      terser(),
    ],
  },

  // ------------------------------------------------------------
  // DTS BUNDLE (ignore ALL .css and ALL .d.ts imports)
  // ------------------------------------------------------------
  {
    input,
    output: [{ format: 'es', file: 'dist/ska-gui-components.d.mts' }],

    // ⭐ Ignore CSS and ALL .d.ts imports
    external: [
      /\.css$/,
      /\.d\.ts$/,
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@types/react',
      '@types/react-dom',
      '@types/prop-types',
      '@types/*',
    ],

    plugins: [
      dts({
        respectExternal: true,
        compilerOptions: {
          skipLibCheck: true,
        },
      }),
    ],
  },
])