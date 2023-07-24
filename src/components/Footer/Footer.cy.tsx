import React from 'react';
import Footer from './Footer';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<Footer />', () => {
  it('renders: light', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <Footer>
          <Grid item>THIS</Grid>
          <Grid item>IS</Grid>
          <Grid item>THE</Grid>
          <Grid item>FOOTER</Grid>
        </Footer>
        ;
      </ThemeProvider>
    );
  });
});
