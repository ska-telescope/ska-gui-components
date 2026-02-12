import { createTheme } from '@mui/material';
import {
  Colors,
  THEME_LIGHT,
  THEME_DARK,
  COLOR_PALETTE_SETS,
} from '@ska-telescope/ska-javascript-components';
import { COLOR_RED, COLOR_ORANGE, COLOR_GREEN, COLOR_BLUE } from '../../utils/getColors/getColors';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;
export enum SKABrandColor {
  Blue = 'blue',
  Pink = 'pink',
}

export function createSKATheme(
  themeMode: SKAThemeMode,
  accessibilityMode: number,
  buttonVariant: SKABrandColor = SKABrandColor.Blue,
) {
  const skaColors = Colors();
  const isDark = themeMode === THEME_DARK;

  const SKAO_BLUE = {
    main: skaColors.SKAO_LOGO_PRIMARY,
    light: skaColors.SKAO_LOGO_PRIMARY,
    dark: skaColors.SKAO_LOGO_PRIMARY,
    contrastText: skaColors.SKAO_LOGO_LIGHT,
  };

  const SKAO_PINK = {
    main: skaColors.SKAO_LOGO_ACCENT,
    light: skaColors.SKAO_LOGO_ACCENT,
    dark: skaColors.SKAO_LOGO_ACCENT,
    contrastText: skaColors.SKAO_LOGO_LIGHT,
  };

  const primary = isDark ? skaColors.DARK_PRIMARY : skaColors.LIGHT_PRIMARY;
  const secondary = buttonVariant === SKABrandColor.Blue ? SKAO_BLUE : SKAO_PINK;

  const paletteSet = COLOR_PALETTE_SETS[accessibilityMode] ?? COLOR_PALETTE_SETS[0];

  const semantic = {
    error: String(paletteSet.colors[COLOR_RED]),
    warning: String(paletteSet.colors[COLOR_ORANGE]),
    success: String(paletteSet.colors[COLOR_GREEN]),
    info: String(paletteSet.colors[COLOR_BLUE]),
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: primary,
      secondary: secondary,
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
