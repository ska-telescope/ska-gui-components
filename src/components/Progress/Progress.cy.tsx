import React from 'react';
import Progress, { ProgressIndicator } from './Progress';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];
const INDICATOR = [ProgressIndicator.Circle, ProgressIndicator.Line, ProgressIndicator.None];

/*
ariaDescription?: string;
ariaTitle?: string;
size?: number;
testId: string;
value?: number;
*/

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    for (const indicator of INDICATOR) {
      it('Theme ' + theTheme + ', INdicator ' + indicator + ', No Label', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} label={false} testId="testId" />
          </ThemeProvider>,
        );
      });
      it('Theme ' + theTheme + ', INdicator ' + indicator + ', Determinate', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} determinate={true} label={false} testId="testId" />
          </ThemeProvider>,
        );
      });
      it('Theme ' + theTheme + ', INdicator ' + indicator + ', Label', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} label={true} testId="testId" />
          </ThemeProvider>,
        );
      });
    }
  }
});
