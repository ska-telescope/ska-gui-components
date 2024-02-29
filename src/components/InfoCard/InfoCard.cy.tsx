import React from 'react';
import InfoCard, { InfoCardColorTypes, InfoCardVariantTypes } from './InfoCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];
const COLOR = [
  InfoCardColorTypes.Info,
  InfoCardColorTypes.Warning,
  InfoCardColorTypes.Error,
  InfoCardColorTypes.Success,
];
const VARIANT = [InfoCardVariantTypes.Filled, InfoCardVariantTypes.Outlined];
const ARIA_DESC = 'ARIA DESCRIPTION';
const ARIA_TITLE = 'ARIA TITLE';
const MESS = 'INFO CARD MESSAGE';
const TEST_FONTSIZE = 40;

describe('<InfoCard />', () => {
  for (const theTheme of THEME) {
    for (const color of COLOR) {
      for (const variant of VARIANT) {
        it('Theme ' + theTheme, () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <InfoCard color={color} message={MESS} variant={variant} testId="testId" />
            </ThemeProvider>,
          );
        });
        it('Theme ' + theTheme + ' : Accessibility', () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <InfoCard
                ariaDescription={ARIA_DESC}
                ariaTitle={ARIA_TITLE}
                color={color}
                message={MESS}
                variant={variant}
                testId="testId"
              />
            </ThemeProvider>,
          );
        });
        it('Theme ' + theTheme + ' : Status', () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <InfoCard
                color={color}
                message="infoCard.message"
                variant={variant}
                showStatus
                testId="testId"
              />
            </ThemeProvider>,
          );
        });
        it('Theme ' + theTheme + ' : Status & icon', () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <InfoCard
                color={color}
                message="infoCard.message"
                variant={variant}
                showStatus
                showStatusIcon
                testId="testId"
              />
            </ThemeProvider>,
          );
        });
        it('Theme ' + theTheme + ' : fontSize ' + TEST_FONTSIZE, () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <InfoCard
                color={color}
                fontSize={TEST_FONTSIZE}
                message="infoCard.message"
                variant={variant}
                showStatus
                showStatusIcon
                testId="testId"
              />
            </ThemeProvider>,
          );
        });
      }
    }
  }
});
