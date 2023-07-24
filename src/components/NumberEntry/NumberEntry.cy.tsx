import React from 'react';
import NumberEntry from './NumberEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<NumberEntry />', () => {
  const theValue = 0;

  it('renders', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <NumberEntry label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
  it('renders, required', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <NumberEntry label="Label" value={theValue} required />
      </ThemeProvider>
    );
  });
});
