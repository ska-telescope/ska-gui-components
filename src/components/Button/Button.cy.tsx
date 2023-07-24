import React from 'react';
import SKAOButton from './Button';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

describe('<SKAOButton />', () => {
  it('renders: light', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <SKAOButton label="Button Label" toolTip={'Tool tip'} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <SKAOButton label="Button Label" toolTip={'Tool tip'} />
      </ThemeProvider>
    );
  });

  it('renders : with a provided function', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <SKAOButton label="Label" onClick={cy.stub().as('onClick')} toolTip={'Tool tip'} />
      </ThemeProvider>
    );
    // TODO : Why is this not found ?
    // cy.findByTestId('AlertCard').click();
    // cy.get('@onClick').should('have.been.called')
  });
});
