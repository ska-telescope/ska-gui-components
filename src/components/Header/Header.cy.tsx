import React from 'react';
import Header from './Header';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<Header />', () => {
  it('renders: light and verifies external link to SKAO site', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <Header themeToggle={cy.stub().as('clicked')}>
          <Grid item>THIS</Grid>
          <Grid item>IS</Grid>
          <Grid item>THE</Grid>
          <Grid item>HEADER</Grid>
        </Header>
      </ThemeProvider>
    );
    cy.get('[id="skaWebsite"]').click();
    // cy.get('@clicked').should('have.been.called');
  });

  it('renders: dark and verifies external link to SKAO site', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <Header themeToggle={cy.stub().as('clicked')}>
          <Grid item>THIS</Grid>
          <Grid item>IS</Grid>
          <Grid item>THE</Grid>
          <Grid item>HEADER</Grid>
        </Header>
      </ThemeProvider>
    );
    cy.get('[id="skaWebsite"]').click();
    // cy.get('@clicked').should('have.been.called');
  });
});
