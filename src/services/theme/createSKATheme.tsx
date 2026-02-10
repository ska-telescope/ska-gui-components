import { createTheme } from '@mui/material';
import {
  Colors,
  THEME_LIGHT,
  THEME_DARK,
  COLOR_PALETTE_SETS,
} from '@ska-telescope/ska-javascript-components';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

const COLOR_RED = 0;
const COLOR_ORANGE = 1;
const COLOR_GREEN = 3;
const COLOR_PURPLE = 5;

export function createSKATheme(themeMode: SKAThemeMode, accessibilityMode: number) {
  const base = createTheme({ palette: { mode: themeMode } });

  const skaColors = Colors();
  const isDark = themeMode === THEME_DARK;

  // ✅ Fixed brand colors – NEVER depend on accessibility
  const primary = isDark ? skaColors.DARK_PRIMARY : skaColors.LIGHT_PRIMARY;
  const secondary = isDark ? skaColors.DARK_SECONDARY : skaColors.LIGHT_SECONDARY;

  // ✅ Accessibility‑aware semantic colors from COLOR_PALETTE_SETS
  const paletteSet = COLOR_PALETTE_SETS[accessibilityMode] ?? COLOR_PALETTE_SETS[0];

  const semantic = {
    error: paletteSet.colors[COLOR_RED],
    warning: paletteSet.colors[COLOR_ORANGE],
    success: paletteSet.colors[COLOR_GREEN],
    info: paletteSet.colors[COLOR_PURPLE],
  };

  const theme = createTheme(base, {
    palette: {
      primary: { main: primary },
      secondary: { main: secondary },
      error: { main: semantic.error },
      warning: { main: semantic.warning },
      success: { main: semantic.success },
      info: { main: semantic.info },
    },
  });

  theme.skaVars = {
    '--ska-color-error': semantic.error,
    '--ska-color-warning': semantic.warning,
    '--ska-color-success': semantic.success,
    '--ska-color-info': semantic.info,
  };

  return theme;
}
