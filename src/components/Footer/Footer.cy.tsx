import React from 'react';
import Footer from './Footer';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Footer />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <Footer testId="testId">
            <Grid />
            <Grid item>More content</Grid>
          </Footer>
        </ThemeProvider>,
      );
    });
  }
});
