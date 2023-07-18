import React from 'react';
import { mount } from 'cypress/react18';
import SKAOButton from './Button';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<SKAOButton />', () => {
  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <SKAOButton label="Button Label" toolTip={'Tool tip'} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <SKAOButton label="Button Label" toolTip={'Tool tip'} />
      </ThemeProvider>
    );
  });
});
