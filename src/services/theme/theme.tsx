import { createTheme, PaletteOptions } from '@mui/material';
import {
  getColorsForMode,
  getTextColorsForMode,
  THEME_LIGHT,
  THEME_DARK,
  ACCESSIBILITY_DEFAULT,
  ACCESSIBILITY_PROTANOPIA,
  ACCESSIBILITY_PROTANOMALY,
  ACCESSIBILITY_DEUTERANOPIA,
  ACCESSIBILITY_DEUTERANOMALY,
  ACCESSIBILITY_TRITANOPIA,
  ACCESSIBILITY_TRITANOMALY,
  ACCESSIBILITY_ACHROMATOMALY,
  ACCESSIBILITY_ACHROMATOPSIA,
} from '@ska-telescope/ska-javascript-components';

export type ThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

export type AccessibilityMode =
  | typeof ACCESSIBILITY_DEFAULT
  | typeof ACCESSIBILITY_PROTANOPIA
  | typeof ACCESSIBILITY_PROTANOMALY
  | typeof ACCESSIBILITY_DEUTERANOPIA
  | typeof ACCESSIBILITY_DEUTERANOMALY
  | typeof ACCESSIBILITY_TRITANOPIA
  | typeof ACCESSIBILITY_TRITANOMALY
  | typeof ACCESSIBILITY_ACHROMATOMALY
  | typeof ACCESSIBILITY_ACHROMATOPSIA;

export type ThemeInput =
  | ThemeMode
  | {
      themeMode: ThemeMode;
      accessibilityMode?: AccessibilityMode;
      reducedMotion?: boolean;
      focusVisibleAlways?: boolean;
    };

const COLOR_RED = 0;
const COLOR_ORANGE = 1;
const COLOR_GREEN = 3;
const COLOR_BLUE = 4;

const buildSemanticColors = (colors: string[], textColors: string[]): PaletteOptions => {
  const make = (i: number) => ({
    main: colors[i],
    light: colors[i],
    dark: colors[i],
    contrastText: textColors[i],
  });

  return {
    success: make(COLOR_GREEN),
    warning: make(COLOR_ORANGE),
    error: make(COLOR_RED),
    info: make(COLOR_BLUE),
  };
};

const theme = (input: ThemeInput) => {
  const themeMode = typeof input === 'string' ? input : input.themeMode;
  const accessibilityMode =
    typeof input === 'string'
      ? ACCESSIBILITY_DEFAULT
      : (input.accessibilityMode ?? ACCESSIBILITY_DEFAULT);

  const colors = getColorsForMode(themeMode, accessibilityMode);
  const textColors = getTextColorsForMode(themeMode, accessibilityMode);

  const semantic = buildSemanticColors(colors, textColors);

  return createTheme({
    palette: {
      mode: themeMode === THEME_LIGHT ? 'light' : 'dark',
      ...semantic,
    },
  });
};

export default theme;
