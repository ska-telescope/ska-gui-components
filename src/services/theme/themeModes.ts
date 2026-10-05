export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

export const ACCESSIBILITY_DEFAULT = 'default';
export const ACCESSIBILITY_PROTANOPIA = 'protanopia';
export const ACCESSIBILITY_PROTANOMALY = 'protanomaly';
export const ACCESSIBILITY_DEUTERANOPIA = 'deuteranopia';
export const ACCESSIBILITY_DEUTERANOMALY = 'deuteranomaly';
export const ACCESSIBILITY_TRITANOPIA = 'tritanopia';
export const ACCESSIBILITY_TRITANOMALY = 'tritanomaly';
export const ACCESSIBILITY_ACHROMATOMALY = 'achromatomaly';
export const ACCESSIBILITY_ACHROMATOPSIA = 'achromatopsia';

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
