import React from 'react';
import { SKAOAlert, AlertColorTypes, AlertVariantTypes } from './Alert';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material/index.js';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const COLOR = [
  AlertColorTypes.Success,
  AlertColorTypes.Info,
  AlertColorTypes.Warning,
  AlertColorTypes.Error,
];
const THEME = [THEME_DARK, THEME_LIGHT];
const VARIANT = [AlertVariantTypes.Outlined, AlertVariantTypes.Filled];

describe('<Alert />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Minimal implementation', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOAlert testId="testId">
            <Typography>CHILDREN defined are displayed in here</Typography>
          </SKAOAlert>
        </ThemeProvider>,
      );
    });
    for (const variant of VARIANT) {
      for (const color of COLOR) {
        it('Theme ' + theTheme + ': Color = ' + color + ' & variant = ' + variant, () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <SKAOAlert color={color} testId="testId" variant={variant}>
                <Typography>CHILDREN defined are displayed in here</Typography>
              </SKAOAlert>
            </ThemeProvider>,
          );
        });
      }
    }
  }
});
