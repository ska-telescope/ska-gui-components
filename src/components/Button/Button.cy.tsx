import React from 'react';
import { OurButton as Button, ButtonColorTypes, ButtonVariantTypes } from './Button';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const COLOR = [
  ButtonColorTypes.Success,
  ButtonColorTypes.Warning,
  ButtonColorTypes.Error,
  ButtonColorTypes.Inherit,
  ButtonColorTypes.Secondary,
];
const THEME = [THEME_DARK, THEME_LIGHT];
const VARIANT = [
  ButtonVariantTypes.Contained,
  ButtonVariantTypes.Outlined,
  ButtonVariantTypes.Text,
];

describe('<Button />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Minimal implementation', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <Button label="Label" testId="LabelButtonId" />
        </ThemeProvider>,
      );
    });
    for (const variant of VARIANT) {
      for (const color of COLOR) {
        it('Theme ' + theTheme + ': Color = ' + color + ' & variant = ' + variant, () => {
          cy.mount(
            <ThemeProvider theme={theme(theTheme)}>
              <CssBaseline />
              <Button color={color} label="Label" testId="LabelButtonId" variant={variant} />
            </ThemeProvider>,
          );
        });

        it('renders : with a provided function.', () => {
          it('Enabled', () => {
            cy.mount(
              <ThemeProvider theme={theme(THEME_DARK)}>
                <CssBaseline />
                <Button
                  color={color}
                  label="Label"
                  onClick={cy.stub().as('onClick')}
                  testId="LabelButtonId"
                  toolTip={'Tool tip'}
                  variant={variant}
                />
              </ThemeProvider>,
            );
            cy.get('[data-testid="LabelButtonId"]').click({ multiple: true });
            // TODO Validate that the button was clicked
            // TODO Need to click a few times to ensure that both buttons work
          });

          it('Disabled', () => {
            cy.mount(
              <ThemeProvider theme={theme(THEME_DARK)}>
                <CssBaseline />
                <Button
                  color={color}
                  label="Label"
                  onClick={cy.stub().as('onClick')}
                  testId="LabelButtonId"
                  toolTip={'Tool tip'}
                  variant={variant}
                />
              </ThemeProvider>,
            );
            cy.get('[data-testid="LabelButtonId"]').click({ multiple: true });
            // TODO Validate that the button was unable to be clicked
          });
        });
      }
    }
  }
});
