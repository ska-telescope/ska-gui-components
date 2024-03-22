import React from 'react';
import Header from './Header';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Header />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Verifies external link to SKAO WebSite', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <Header testId="testId">
            <Grid item>THIS</Grid>
            <Grid item>IS</Grid>
            <Grid item>THE</Grid>
            <Grid item>HEADER</Grid>
          </Header>
        </ThemeProvider>,
      );
      cy.get('[id="skaWebsite"]').click();
    });
  }
});
