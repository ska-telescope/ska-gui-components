import React from 'react';
import TextEntry from './TextEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<TextEntry />', () => {
  const theValue = '';

  it('renders', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <TextEntry label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
  it('renders, required', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <TextEntry label="Label" value={theValue} required />
      </ThemeProvider>
    );
  });
});
