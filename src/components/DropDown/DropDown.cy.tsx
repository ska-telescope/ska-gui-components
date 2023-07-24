import React from 'react';
import DropDown from './DropDown';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<DropDown />', () => {
  const theValue = '';
  const DUMMY_OPTIONS = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('renders: light', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <DropDown label="Label" options={DUMMY_OPTIONS} value={theValue} />
      </ThemeProvider>
    );
  });
});
