import React from 'react';
import { mount } from 'cypress/react18';
import Header from './Header';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<Header />', () => {
  const themeToggle = () => {};

  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <Header themeToggle={themeToggle}>
          <Grid item>THIS</Grid>
          <Grid item>IS</Grid>
          <Grid item>THE</Grid>
          <Grid item>Header</Grid>
        </Header>
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <Header themeToggle={themeToggle}>
          <Grid item>THIS</Grid>
          <Grid item>IS</Grid>
          <Grid item>THE</Grid>
          <Grid item>Header</Grid>
        </Header>
      </ThemeProvider>
    );
  });
});
