import React from 'react';
import TelescopeSelector from './TelescopeSelector';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { StoreProvider } from '@ska-telescope/ska-gui-local-storage';
import { TELESCOPE_LOW } from '@ska-telescope/ska-javascript-components';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<TelescopeSelector />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + '', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <TelescopeSelector telescope={TELESCOPE_LOW} updateTelescope={cy.stub().as('updateTelescope')} />
          </ThemeProvider>
        </StoreProvider>,
      );
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });
    it('Theme ' + theTheme + ', toolTips', () => {
      cy.mount(
        <StoreProvider>
          <ThemeProvider theme={theme(theTheme)}>
            <CssBaseline />
            <TelescopeSelector telescope={TELESCOPE_LOW} updateTelescope={cy.stub().as('updateTelescope')} />
          </ThemeProvider>
        </StoreProvider>,
      );
    });
  }

  it('renders : with a provided function.', () => {
    it('Enabled', () => {
      cy.mount(<TelescopeSelector telescope={TELESCOPE_LOW} toolTip={'ToolTip'} updateTelescope={cy.stub().as('updateTelescope')} />);
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });

    it('Disabled', () => {
      cy.mount(<TelescopeSelector disabled telescope={TELESCOPE_LOW} toolTip={'ToolTip'} updateTelescope={cy.stub().as('updateTelescope')} />);
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });
  });
});
