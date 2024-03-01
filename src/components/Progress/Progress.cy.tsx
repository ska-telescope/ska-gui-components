import React from 'react';
import Progress, { ProgressIndicator } from './Progress';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];
const INDICATOR = [ProgressIndicator.Circle, ProgressIndicator.Line, ProgressIndicator.None];
const BASE = 70;
const OFFSET = 25;
const SIZE = [ BASE, BASE + OFFSET, BASE + OFFSET * 2, BASE + OFFSET * 3, BASE + OFFSET * 4, BASE + OFFSET * 5, BASE + OFFSET * 6]

/*
ariaDescription?: string;
ariaTitle?: string;
size?: number;
testId: string;
value?: number;
*/

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <Progress testId="testId" />
        </ThemeProvider>,
      );
    });
    for (const indicator of INDICATOR) {
      it('Theme ' + theTheme + ', Indicator ' + indicator + ', No Label', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} testId="testId" />
          </ThemeProvider>,
        );
      });
      it('Theme ' + theTheme + ', Indicator ' + indicator + ', No Label', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} testId="testId" value={5} />
          </ThemeProvider>,
        );
      });
      it('Theme ' + theTheme + ', Indicator ' + indicator + ', Determinate', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} determinate={true} testId="testId" />
          </ThemeProvider>,
        );
      });
      it('Theme ' + theTheme + ', Indicator ' + indicator + ', Label', () => {
        cy.mount(
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <Progress indicator={indicator} label testId="testId" />
          </ThemeProvider>,
        );
      });
      
      for (const sizing of SIZE) {
        it('Theme ' + theTheme + ', Indicator ' + indicator + ', Label, Size '+ (sizing - 10), () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <Progress indicator={indicator} label size={sizing - 10} testId="testId" />
            </ThemeProvider>,
          );
        });
        it('Theme ' + theTheme + ', Indicator ' + indicator + ', No Label, Size '+ (sizing - 10), () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <Progress indicator={indicator} size={sizing - 10} testId="testId" />
            </ThemeProvider>,
          );
        });
      }
    }
  }
});
