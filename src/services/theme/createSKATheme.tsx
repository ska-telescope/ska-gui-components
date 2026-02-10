import { createTheme } from '@mui/material';
import {
  Colors,
  THEME_LIGHT,
  THEME_DARK,
  COLOR_PALETTE_SETS,
} from '@ska-telescope/ska-javascript-components';
import {
  COLOR_RED,
  COLOR_ORANGE,
  COLOR_GREEN,
  COLOR_PURPLE,
} from '../../utils/getColors/getColors';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

export function createSKATheme(themeMode: SKAThemeMode, accessibilityMode: number) {
  const skaColors = Colors();
  const isDark = themeMode === THEME_DARK;

  // Fixed brand colors — never depend on accessibility
  const primary = isDark ? skaColors.DARK_PRIMARY : skaColors.LIGHT_PRIMARY;
  const secondary = isDark ? skaColors.DARK_SECONDARY : skaColors.LIGHT_SECONDARY;

  // Accessibility‑aware semantic colors
  const paletteSet = COLOR_PALETTE_SETS[accessibilityMode] ?? COLOR_PALETTE_SETS[0];

  const semantic = {
    error: String(paletteSet.colors[COLOR_RED]),
    warning: String(paletteSet.colors[COLOR_ORANGE]),
    success: String(paletteSet.colors[COLOR_GREEN]),
    info: String(paletteSet.colors[COLOR_PURPLE]),
  };

  // ⭐ SINGLE createTheme call — prevents CSS variable mode
  const theme = createTheme({
    palette: {
      mode: themeMode,
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
