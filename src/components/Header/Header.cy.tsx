import React from 'react';
import Header from './Header';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Header />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Verifies external link to SKAO WebSite', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Header testId="testId">
              <Grid item>THIS</Grid>
              <Grid item>IS</Grid>
              <Grid item>THE</Grid>
              <Grid item>HEADER</Grid>
            </Header>
          </ThemeProvider>
        </StoreProvider>
      );
      cy.get('[id="skaWebsite"]').click();
      // cy.get('@clicked').should('have.been.called');
    });
  }
});
