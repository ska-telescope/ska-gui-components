import React from 'react';
import InfoCard from './InfoCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<InfoCard />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <InfoCard level={1} message="infoCard.message" />
        </ThemeProvider>
      );
    });

    it('Theme ' + theTheme + ' : filled', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <InfoCard level={1} message="infoCard.message" filled />
        </ThemeProvider>
      );
    });
  }
});
