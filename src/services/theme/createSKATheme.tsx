import { createTheme } from '@mui/material';
import { getColors } from '../../utils/getColors/getColors';
import { Colors, THEME_LIGHT, THEME_DARK } from '@ska-telescope/ska-javascript-components';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

export function createSKATheme(themeMode: SKAThemeMode, accessibilityMode: number) {
  const base = createTheme({ palette: { mode: themeMode } });

  const colorsArray =
    getColors({
      type: 'chart',
      colors: '*',
      content: 'bg',
      asArray: true,
      paletteIndex: accessibilityMode,
    }) ?? [];

  const semantic = {
    error: colorsArray[0],
    warning: colorsArray[1],
    success: colorsArray[3],
    info: colorsArray[4],
  };

  const skaColors = Colors();
  const isDark = themeMode === THEME_DARK;

  const theme = createTheme(base, {
    palette: {
      primary: { main: isDark ? skaColors.DARK_PRIMARY : skaColors.LIGHT_PRIMARY },
      secondary: { main: isDark ? skaColors.DARK_SECONDARY : skaColors.LIGHT_SECONDARY },
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
