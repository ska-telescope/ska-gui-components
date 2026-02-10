import { createTheme } from '@mui/material';
import { getColors } from '../../utils/getColors/getColors';
import { Colors, Styling, THEME_LIGHT, THEME_DARK } from '@ska-telescope/ska-javascript-components';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

export function createSKATheme(themeMode: SKAThemeMode, accessibilityMode: number) {
  const base = createTheme({ palette: { mode: themeMode } });

  // ------------------------------------------------------------
  // 1. Semantic colors (error/warning/success/info)
  // ------------------------------------------------------------
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

  // ------------------------------------------------------------
  // 2. Primary / Secondary colors (from ska-javascript-components)
  // ------------------------------------------------------------
  const colors = Colors();
  const style = Styling();
  const isDark = themeMode === THEME_DARK;

  const getPrimarySecondary = () => {
    switch (accessibilityMode) {
      case 1: // protanopia
        return {
          primary: isDark ? colors.PROTANOPIA_PRIMARY_DARK : colors.PROTANOPIA_PRIMARY_LIGHT,
          secondary: isDark ? colors.PROTANOPIA_SECONDARY_DARK : colors.PROTANOPIA_SECONDARY_LIGHT,
        };
      case 2: // protanomaly
        return {
          primary: isDark ? colors.PROTANOMALY_PRIMARY_DARK : colors.PROTANOMALY_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.PROTANOMALY_SECONDARY_DARK
            : colors.PROTANOMALY_SECONDARY_LIGHT,
        };
      case 3: // deuteranopia
        return {
          primary: isDark ? colors.DEUTERANOPIA_PRIMARY_DARK : colors.DEUTERANOPIA_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.DEUTERANOPIA_SECONDARY_DARK
            : colors.DEUTERANOPIA_SECONDARY_LIGHT,
        };
      case 4: // deuteranomaly
        return {
          primary: isDark ? colors.DEUTERANOMALY_PRIMARY_DARK : colors.DEUTERANOMALY_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.DEUTERANOMALY_SECONDARY_DARK
            : colors.DEUTERANOMALY_SECONDARY_LIGHT,
        };
      case 5: // tritanopia
        return {
          primary: isDark ? colors.TRITANOPIA_PRIMARY_DARK : colors.TRITANOPIA_PRIMARY_LIGHT,
          secondary: isDark ? colors.TRITANOPIA_SECONDARY_DARK : colors.TRITANOPIA_SECONDARY_LIGHT,
        };
      case 6: // tritanomaly
        return {
          primary: isDark ? colors.TRITANOMALY_PRIMARY_DARK : colors.TRITANOMALY_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.TRITANOMALY_SECONDARY_DARK
            : colors.TRITANOMALY_SECONDARY_LIGHT,
        };
      case 7: // achromatomaly
        return {
          primary: isDark ? colors.ACHROMATOMALY_PRIMARY_DARK : colors.ACHROMATOMALY_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.ACHROMATOMALY_SECONDARY_DARK
            : colors.ACHROMATOMALY_SECONDARY_LIGHT,
        };
      case 8: // achromatopsia
        return {
          primary: isDark ? colors.ACHROMATOPSIA_PRIMARY_DARK : colors.ACHROMATOPSIA_PRIMARY_LIGHT,
          secondary: isDark
            ? colors.ACHROMATOPSIA_SECONDARY_DARK
            : colors.ACHROMATOPSIA_SECONDARY_LIGHT,
        };
      default: // default accessibility
        return {
          primary: isDark ? colors.DARK_PRIMARY : colors.LIGHT_PRIMARY,
          secondary: isDark ? colors.DARK_SECONDARY : colors.LIGHT_SECONDARY,
        };
    }
  };

  const primarySecondary = getPrimarySecondary();

  // ------------------------------------------------------------
  // 3. Build the final theme
  // ------------------------------------------------------------
  const theme = createTheme(base, {
    palette: {
      ...primarySecondary,
      error: { main: semantic.error },
      warning: { main: semantic.warning },
      success: { main: semantic.success },
      info: { main: semantic.info },
    },
    shape: {
      borderRadius: style.BORDER_RADIUS,
    },
    typography: {
      fontFamily: style.FONT_FAMILY,
    },
  });

  // ------------------------------------------------------------
  // 4. Inject CSS variables for semantic colors
  // ------------------------------------------------------------
  theme.skaVars = {
    '--ska-color-error': semantic.error,
    '--ska-color-warning': semantic.warning,
    '--ska-color-success': semantic.success,
    '--ska-color-info': semantic.info,
  };

  return theme;
}
