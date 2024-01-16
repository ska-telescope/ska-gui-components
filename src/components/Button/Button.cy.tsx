import React from 'react';
import { OurButton, ButtonColorTypes, ButtonVariantTypes } from './Button';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<Button />', () => {
  it('Basic rendering', () => {
    cy.mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <OurButton label="Label" testId="LabelButtonId" />
      </ThemeProvider>
    );
  });

  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ', Color DEFAULT', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color error', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" color={ButtonColorTypes.Error} testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color inherit', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" color={ButtonColorTypes.Inherit} testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color secondary', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" color={ButtonColorTypes.Secondary} testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color success', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" color={ButtonColorTypes.Success} testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ', Color warning', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <OurButton label="Label" color={ButtonColorTypes.Warning} testId="LabelButtonId" />
        </ThemeProvider>
      );
    });
  }

  it('renders : Checking the variants.', () => {
    it(ButtonVariantTypes.Contained, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_DARK)}>
          <CssBaseline />
          <OurButton label="Label" testId="LabelButtonId" variant={ButtonVariantTypes.Contained} />
        </ThemeProvider>
      );
    });
    it(ButtonVariantTypes.Outlined, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_DARK)}>
          <CssBaseline />
          <OurButton label="Label" testId="LabelButtonId" variant={ButtonVariantTypes.Outlined} />
        </ThemeProvider>
      );
    });
    it(ButtonVariantTypes.Text, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_DARK)}>
          <CssBaseline />
          <OurButton label="Label" testId="LabelButtonId" variant={ButtonVariantTypes.Text} />
        </ThemeProvider>
      );
    });
  });

  it('renders : with a provided function.', () => {
    it('Enabled', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_DARK)}>
          <CssBaseline />
          <OurButton
            label="Label"
            onClick={cy.stub().as('onClick')}
            testId="LabelButtonId"
            toolTip={'Tool tip'}
          />
        </ThemeProvider>
      );
      cy.get('[data-testid="LabelButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
      // TODO Need to click a few times to ensure that both buttons work
    });

    it('Disabled', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_DARK)}>
          <CssBaseline />
          <OurButton
            label="Label"
            onClick={cy.stub().as('onClick')}
            testId="LabelButtonId"
            toolTip={'Tool tip'}
          />
        </ThemeProvider>
      );
      cy.get('[data-testid="LabelButtonId"]').click({ multiple: true });
      // TODO Validate that the button was unable to be clicked
    });
  });
});
