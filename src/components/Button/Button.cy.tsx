import React from 'react';
import SKAOButton from './Button';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [ THEME_DARK, THEME_LIGHT ];

describe('<SKAOButton />', () => {

  /*
  it('Basic rendering', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <SKAOButton label="Label"/>
      </ThemeProvider>
    );
  });

  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ', Color DEFAULT', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color error', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" color="error"/>
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color inherit', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" color="inherit"/>
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color secondary', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" color="secondary"/>
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color success', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" color="success"/>
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color warning', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <SKAOButton label="Label" color="warning"/>
        </ThemeProvider>
      );
    });
    
  }

  it('renders : with a provided function', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <SKAOButton label="Label" onClick={cy.stub().as('onClick')} toolTip={'Tool tip'} />
      </ThemeProvider>
    );
    cy.get('[data-testid="LabelButtonId"]').click({ multiple: true });
    // TODO Validate that the button was clicked
  });
  */
});
