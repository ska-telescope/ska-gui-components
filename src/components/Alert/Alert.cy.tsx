import React from 'react';
import { SKAOAlert, AlertColorTypes, AlertVariantTypes } from './Alert';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Alert />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Pastel with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Error}
            testId="testId"
            variant={AlertVariantTypes.Outlined}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Pastel with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Info}
            testId="testId"
            variant={AlertVariantTypes.Outlined}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Pastel with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Success}
            testId="testId"
            variant={AlertVariantTypes.Outlined}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Pastel with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Warning}
            testId="testId"
            variant={AlertVariantTypes.Outlined}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Error}
            testId="testId"
            variant={AlertVariantTypes.Filled}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Info}
            testId="testId"
            variant={AlertVariantTypes.Filled}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Success}
            testId="testId"
            variant={AlertVariantTypes.Filled}
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert
            color={AlertColorTypes.Warning}
            testId="testId"
            variant={AlertVariantTypes.Filled}
          />
        </ThemeProvider>
      );
    });
  }
});
