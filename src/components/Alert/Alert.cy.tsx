import React from 'react';
import SKAOAlert from './Alert';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Alert />', () => {
  for (const theTheme of THEME) {
    for (let i = 0; i < 10; i += 1) {
      it('Theme ' + theTheme + ': Pastel with no title', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <SKAOAlert severity={i} testId="testId" />
          </ThemeProvider>
        );
      });
      it('Theme ' + theTheme + ': Filled with no title', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <SKAOAlert filled severity={i} testId="testId" />
          </ThemeProvider>
        );
      });
    }
  }
});
