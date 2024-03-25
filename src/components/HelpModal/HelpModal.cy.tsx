import React from 'react';
import HelpModal from './HelpModal';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];
const HELP = {
  content: 'THIS IS CONTENT HELP',
  component: 'THIS IS COMPONENT HELP',
  showHelp: false,
};

describe('<HelpModal />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': showing content', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <HelpModal help={HELP} helpToggle={cy.stub().as('helpToggle')} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ': showing component', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <HelpModal component={true} help={HELP} helpToggle={cy.stub().as('helpToggle')} />
        </ThemeProvider>,
      );
      cy.get('[data-testid="closeHelpModalBtn"]').click();
    });
  }
});
