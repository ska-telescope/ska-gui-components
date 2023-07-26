import React from 'react';
import ButtonToggle from './ButtonToggle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const telescope = { id: 'low', Label: 'SKA LOW' };
const telescopeList = [
  { id: 'low', label: 'SKA LOW', value: null },
  { id: 'mid', label: 'SKA MID', value: null },
];

describe('<ButtonToggle />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + '', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <ButtonToggle
            current={telescope.id}
            label="Label"
            options={telescopeList}
            value={telescope}
          />
        </ThemeProvider>
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });
    it('Theme ' + theTheme + ', toolTips', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <ButtonToggle
            current={telescope.id}
            label="Label"
            options={telescopeList}
            value={telescope}
            toolTip={'ToolTip'}
          />
        </ThemeProvider>
      );
      // TODO : Test that there is a tooltip  ?
    });
  }

  it('renders : with a provided function.', () => {
    it('Enabled', () => {
      cy.mount(
        <ButtonToggle
          current={telescope.id}
          label="Label"
          options={telescopeList}
          setValue={cy.stub().as('setValue')}
          value={telescope}
          toolTip={'ToolTip'}
        />
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });

    it('Disabled', () => {
      cy.mount(
        <ButtonToggle
          current={telescope.id}
          disabled
          label="Label"
          options={telescopeList}
          setValue={cy.stub().as('setValue')}
          value={telescope}
          toolTip={'ToolTip'}
        />
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was unable to be clicked
    });
  });
});
