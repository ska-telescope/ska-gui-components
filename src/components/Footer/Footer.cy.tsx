import React from 'react';
import { mount } from 'cypress/react18';
import Footer from './Footer';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<Footer />', () => {
  it('renders: light', () => {
    mount(
    <ThemeProvider theme={theme(THEME_LIGHT)}>
      <CssBaseline />
      <Footer />
    </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
    <ThemeProvider theme={theme(THEME_DARK)}>
      <CssBaseline />
      <Footer />
    </ThemeProvider>
    );
  });
});
