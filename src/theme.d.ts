// packages/ska-gui-components/src/theme/theme.d.ts

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    skaVars: Record<string, string>;
  }

  interface ThemeOptions {
    skaVars?: Record<string, string>;
  }
}
