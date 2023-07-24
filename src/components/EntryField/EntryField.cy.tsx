import React from 'react';
import { EntryField } from './EntryField';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<EntryField />', () => {
  const theValue = '';

  it('renders: light', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <EntryField label="Label" value={theValue} />
      </ThemeProvider>
    );
  });
});
