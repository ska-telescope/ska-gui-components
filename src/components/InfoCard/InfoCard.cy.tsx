import React from 'react';
import InfoCard, { InfoCardColorTypes, InfoCardVariantTypes } from './InfoCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<InfoCard />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <InfoCard color={InfoCardColorTypes.Info} message="infoCard.message" testId="testId" />
        </ThemeProvider>,
      );
    });

    it('Theme ' + theTheme + ' : filled', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <InfoCard
            color={InfoCardColorTypes.Info}
            message="infoCard.message"
            testId="testId"
            variant={InfoCardVariantTypes.Filled}
          />
        </ThemeProvider>,
      );
    });

    it('Theme ' + theTheme + ' : Status', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <InfoCard
            color={InfoCardColorTypes.Info}
            message="infoCard.message"
            testId="testId"
            showStatus
          />
        </ThemeProvider>,
      );
    });
  }
});
