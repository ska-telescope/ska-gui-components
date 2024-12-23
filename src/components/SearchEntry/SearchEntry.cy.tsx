import React from 'react';
import SearchEntry from './SearchEntry';
import { CssBaseline, ThemeProvider } from '@mui/material/index.js';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = '';

describe('<SearchEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SearchEntry label="Label" testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SearchEntry label="Label" testId="testId" value={theValue} disabled />
        </ThemeProvider>,
      );
      // TODO : Check it is disabled
    });
    it('Theme ' + theTheme + ' : HelperText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SearchEntry label="Label" testId="testId" value={theValue} helperText="HELPER TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that helperText is visible
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SearchEntry label="Label" testId="testId" value={theValue} errorText="ERROR TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that errorText is shown and the colouring is correct
    });
  }
});
