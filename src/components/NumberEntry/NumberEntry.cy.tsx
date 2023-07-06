import React from 'react';
import { mount } from 'cypress/react18';
import NumberEntry from './NumberEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<NumberEntry />', () => {

  const theValue = 0;

  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <NumberEntry label="Label" value={theValue} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <NumberEntry label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
});
