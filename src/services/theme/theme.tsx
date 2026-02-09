import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import {
  Theme as RawTheme,
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
//
const COLOR_GREEN = 3;
const COLOR_BLUE = 4;

interface PaletteSet {
  colors: string[];
  textColors: string[];
}

interface RawThemeWithPaletteSet extends ThemeOptions {
  paletteSet?: PaletteSet;
}

const buildSemanticColors = (set: PaletteSet): PaletteOptions => {
  const { colors, textColors } = set;

  const make = (index: number) => ({
    main: colors[index],
    light: colors[index],
    dark: colors[index],
    contrastText: textColors[index],
  });

  return {
    success: make(COLOR_GREEN),
    warning: make(COLOR_ORANGE),
    error: make(COLOR_RED),
    info: make(COLOR_BLUE),
  };
};

const theme = (mode: ThemeInput) => {
  const base = RawTheme(mode) as RawThemeWithPaletteSet;

  const semantic = base.paletteSet ? buildSemanticColors(base.paletteSet) : {};

  return createTheme({
    ...base,
    palette: {
      ...base.palette,
      ...semantic,
    },
  });
};

export default theme;
