import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import '../src/services/i18n/i18n';

import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../src/services/theme/theme';
import { Theme } from '@ska-telescope/ska-javascript-components';

export const decorators = [
  (Story) => {
    const mode = useDarkMode() ? THEME_DARK : THEME_LIGHT;
    const thisTheme = theme(mode);

    return (
      <ThemeProvider theme={thisTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // appContentBg: '#202020', // override main story view frame
  // barBg: '#202020'         // override top toolbar
};
