import React from 'react';
import TelescopeSelector from './TelescopeSelector';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<TelescopeSelector />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + '', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <TelescopeSelector />
          </ThemeProvider>
        </StoreProvider>,
      );
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });
    it('Theme ' + theTheme + ', toolTips', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <TelescopeSelector toolTip={'ToolTip'} />
          </ThemeProvider>
        </StoreProvider>,
      );
      // TODO : Test that there is a tooltip  ?
    });
  }

  it('renders : with a provided function.', () => {
    it('Enabled', () => {
      cy.mount(<TelescopeSelector toolTip={'ToolTip'} />);
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });

    it('Disabled', () => {
      cy.mount(<TelescopeSelector disabled toolTip={'ToolTip'} />);
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
      // TODO Validate that the button was unable to be clicked
    });
  });
});
