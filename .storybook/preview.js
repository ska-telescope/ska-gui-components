import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';
import { THEME_DARK, THEME_LIGHT, theme } from '../src/services/theme/theme';

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: THEME_LIGHT,
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: THEME_LIGHT, left: "☀️", title: "Light mode" },
        { value: THEME_DARK, left: "🌙", title: "Dark mode" },
      ],
    },
  },
};

export const withMuiTheme = (Story, context) => {

  const { theme: themeKey } = context.globals;

  return (
    <StoreProvider>
      <ThemeProvider theme={theme(themeKey)}>
        <CssBaseline />
        <React.Suspense fallback="...is loading">
          <Story />
        </React.Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
