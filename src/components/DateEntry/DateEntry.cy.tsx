import React from 'react';
import DateEntry from './DateEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<DateEntry />', () => {
  const theValue = '';

  it('renders: light', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <DateEntry label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
});
