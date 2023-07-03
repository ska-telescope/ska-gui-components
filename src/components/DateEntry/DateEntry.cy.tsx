import React from 'react';
import { mount } from 'cypress/react18';
import DateEntry from './DateEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<DateEntry />', () => {
  const [theValue, setTheValue] = React.useState('');

  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <DateEntry label="Label" setValue={setTheValue} value={theValue} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <DateEntry label="Label" setValue={setTheValue} value={theValue} />
      </ThemeProvider>
    );
  });
});
