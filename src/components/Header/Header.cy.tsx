import React from 'react';
import Header from './Header';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { TELESCOPE_MID } from '@ska-telescope/ska-javascript-components';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const theHelp = {
  content: '',
  component: '',
  showHelp: false,
};

describe('<Header />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Verifies external link to SKAO WebSite', () => {
      const theStorage = {
        help: theHelp,
        helpToggle: cy.stub().as('helpToggle'),
        telescope: TELESCOPE_MID,
        themeMode: THEME_LIGHT,
        toggleTheme: cy.stub().as('toggleTheme'),
        updateTelescope: cy.stub().as('updateTelescope'),
      };

      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <Header storage={theStorage} testId="testId">
            <Grid item>THIS</Grid>
            <Grid item>IS</Grid>
            <Grid item>THE</Grid>
            <Grid item>HEADER</Grid>
          </Header>
        </ThemeProvider>,
      );
      cy.get('[data-testId="skaWebsite"]').click();
    });
  }
});
