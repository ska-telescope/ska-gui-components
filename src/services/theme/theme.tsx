import { createTheme } from '@mui/material';
import {
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
  Theme,
} from '@ska-telescope/ska-javascript-components';

type ThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;
type AccessibilityMode =
  | typeof ACCESSIBILITY_DEFAULT
  | typeof ACCESSIBILITY_PROTANOPIA
  | typeof ACCESSIBILITY_PROTANOMALY
  | typeof ACCESSIBILITY_DEUTERANOPIA
  | typeof ACCESSIBILITY_DEUTERANOMALY
  | typeof ACCESSIBILITY_TRITANOPIA
  | typeof ACCESSIBILITY_TRITANOMALY
  | typeof ACCESSIBILITY_ACHROMATOMALY
  | typeof ACCESSIBILITY_ACHROMATOPSIA;

type ThemeInput =
  | ThemeMode
  | {
      themeMode: ThemeMode;
      accessibilityMode?: AccessibilityMode;
    };

const theme = (mode: ThemeInput) => createTheme(Theme(mode));

export default theme;
