import React from 'react';
import { mount } from 'cypress/react18';
import Header from './Header';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<Header />', () => {
  const themeToggle = () => {};

  it('renders: light', () => {
    mount(
    <ThemeProvider theme={theme(THEME_LIGHT)}>
      <CssBaseline />
      <Header themeToggle={themeToggle} />
    </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
    <ThemeProvider theme={theme(THEME_DARK)}>
      <CssBaseline />
      <Header themeToggle={themeToggle} />
    </ThemeProvider>
    );
  });
});
