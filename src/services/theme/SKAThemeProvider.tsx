import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createSKATheme } from './createSKATheme';
import { THEME_LIGHT, THEME_DARK } from '@ska-telescope/ska-javascript-components';
import { SKABrandColor } from './createSKATheme';

export type SKAThemeMode = typeof THEME_LIGHT | typeof THEME_DARK;

interface SKAThemeProviderProps {
  themeMode: SKAThemeMode;
  accessibilityMode: number;
  buttonVariant: SKABrandColor;
  children: React.ReactNode;
}

export function SKAThemeProvider({
  themeMode,
  accessibilityMode,
  buttonVariant,
  children,
}: SKAThemeProviderProps) {
  const theme = React.useMemo(
    () => createSKATheme(themeMode, accessibilityMode, buttonVariant),
    [themeMode, accessibilityMode, buttonVariant],
  );

  React.useEffect(() => {
    if (!theme.skaVars) return;

    for (const [key, value] of Object.entries(theme.skaVars)) {
      document.documentElement.style.setProperty(key, String(value));
    }
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
