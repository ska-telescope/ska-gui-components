import React from 'react';
import { mount } from 'cypress/react18';
import ButtonToggle from './ButtonToggle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<ButtonToggle />', () => {
  const telescope = { id: 'low', Label: 'SKA LOW' };
  const telescopeList = [
    { id: 'low', label: 'SKA LOW', value: null },
    { id: 'mid', label: 'SKA MID', value: null },
  ];

  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <ButtonToggle
          current={telescope.id}
          label="ButtonToggle Label"
          options={telescopeList}
          value={telescope}
          toolTip={'Tool tip'}
        />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <ButtonToggle
          current={telescope.id}
          label="ButtonToggle Label"
          options={telescopeList}
          value={telescope}
          toolTip={'Tool tip'}
        />
      </ThemeProvider>
    );
  });
});
