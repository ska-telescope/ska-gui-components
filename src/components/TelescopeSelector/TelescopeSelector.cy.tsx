import React from 'react';
import TelescopeSelector from './TelescopeSelector';
import { CssBaseline, ThemeProvider } from '@mui/material/index.js';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { TELESCOPE_LOW } from '@ska-telescope/ska-javascript-components';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<TelescopeSelector />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + '', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TelescopeSelector
            telescope={TELESCOPE_LOW}
            updateTelescope={cy.stub().as('updateTelescope')}
          />
        </ThemeProvider>,
      );
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });
    it('Theme ' + theTheme + ', toolTips', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TelescopeSelector
            telescope={TELESCOPE_LOW}
            updateTelescope={cy.stub().as('updateTelescope')}
          />
        </ThemeProvider>,
      );
    });
  }

  it('renders : with a provided function.', () => {
    it('Enabled', () => {
      cy.mount(
        <TelescopeSelector
          telescope={TELESCOPE_LOW}
          toolTip={'ToolTip'}
          updateTelescope={cy.stub().as('updateTelescope')}
        />,
      );
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });

    it('Disabled', () => {
      cy.mount(
        <TelescopeSelector
          disabled
          telescope={TELESCOPE_LOW}
          toolTip={'ToolTip'}
          updateTelescope={cy.stub().as('updateTelescope')}
        />,
      );
      cy.get('[data-testid="telescopeSelectorId"]').click({ multiple: true });
    });
  });
});
