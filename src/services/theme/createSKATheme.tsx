import { createTheme } from '@mui/material';
import { getColors } from '../../utils/getColors/getColors';
import { THEME_LIGHT, THEME_DARK } from '@ska-telescope/ska-javascript-components';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

export function createSKATheme(themeMode: SKAThemeMode, accessibilityMode: number) {
  const base = createTheme({ palette: { mode: themeMode } });

  const colors =
    getColors({
      type: 'chart',
      colors: '*',
      content: 'bg',
      asArray: true,
      paletteIndex: accessibilityMode,
    }) ?? [];

  const semantic = {
    error: colors[0],
    warning: colors[1],
    success: colors[3],
    info: colors[4],
  };

  const theme = createTheme(base, {
    palette: {
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
