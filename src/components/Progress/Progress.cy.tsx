import React from 'react';
import Progress from './Progress';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <Progress testId="testId" />
        </ThemeProvider>
      );
    });
  }
});
