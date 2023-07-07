import React from 'react';
import { mount } from 'cypress/react18';
import { EntryField } from './EntryField';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<EntryField />', () => {

  const theValue = "";

  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <EntryField label="Label" value={theValue} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <EntryField label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
});
