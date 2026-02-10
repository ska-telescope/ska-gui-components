import { ThemeProvider } from '@mui/material/styles';
import { createSKATheme } from './createSKATheme';
import { THEME_LIGHT, THEME_DARK } from '@ska-telescope/ska-javascript-components';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

interface SKAThemeProviderProps {
  themeMode: SKAThemeMode;
  accessibilityMode: number;
  children: React.ReactNode;
}

export function SKAThemeProvider({
  themeMode,
  accessibilityMode,
  children,
}: SKAThemeProviderProps) {
  const theme = createSKATheme(themeMode, accessibilityMode);

  Object.entries(theme.skaVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, String(value));
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
