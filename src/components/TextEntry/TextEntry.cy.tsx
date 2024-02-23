import React from 'react';
import TextEntry from './TextEntry';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = '';

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <TextEntry label="Label" testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <TextEntry label="Label" testId="testId" value={theValue} disabled />
        </ThemeProvider>,
      );
      // TODO : Check it is disabled
    });
    it('Theme ' + theTheme + ' : Required ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <TextEntry label="Label" testId="testId" value={theValue} required />
        </ThemeProvider>,
      );
      // TODO : Check it is required
    });
    it('Theme ' + theTheme + ' : HelperText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <TextEntry label="Label" testId="testId" value={theValue} helperText="HELPER TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that helperText is visible
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <TextEntry label="Label" testId="testId" value={theValue} errorText="ERROR TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that errorText is shown and the colouring is correct
    });
  }
});
