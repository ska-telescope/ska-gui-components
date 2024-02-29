import React from 'react';
import HelpModal from './HelpModal';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<HelpModal />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': showing content', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <HelpModal />
          </ThemeProvider>
        </StoreProvider>,
      );
    });
    it('Theme ' + theTheme + ': showing component', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <HelpModal component={true} />
          </ThemeProvider>
        </StoreProvider>,
      );
    });
  }
});
