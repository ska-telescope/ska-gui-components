import React from 'react';
import ButtonToggle from './ButtonToggle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const telescope = { id: 'low', Label: 'SKA LOW' };
const optionList = [
  { id: 'low', label: 'SKA LOW', value: null },
  { id: 'mid', label: 'SKA MID', value: null },
];

describe('<ButtonToggle />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Minimal implementation', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <ButtonToggle
            current={telescope.id}
            options={optionList}
            testId="LabelToggleButtonId"
            value={telescope}
          />
        </ThemeProvider>,
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });

    it('Theme ' + theTheme + ', toolTips', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <ButtonToggle
            current={telescope.id}
            options={optionList}
            value={telescope}
            testId="LabelToggleButtonId"
            toolTip={'ToolTip'}
          />
        </ThemeProvider>,
      );
      // TODO : Test that there is a tooltip  ?
    });
    it('Theme ' + theTheme + ': A provided function and ENABLED', () => {
      cy.mount(
        <ButtonToggle
          current={telescope.id}
          disabled={false}
          options={optionList}
          setValue={cy.stub().as('setValue')}
          testId="LabelToggleButtonId"
          toolTip={'ToolTip'}
          value={telescope}
        />,
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });
    it('Theme ' + theTheme + ': A provided function and DISABLED', () => {
      cy.mount(
        <ButtonToggle
          current={telescope.id}
          disabled={true}
          options={optionList}
          setValue={cy.stub().as('setValue')}
          testId="LabelToggleButtonId"
          toolTip={'ToolTip'}
          value={telescope}
        />,
      );
      cy.get('[data-testid="LabelToggleButtonId"]').click({ multiple: true });
      // TODO Validate that the button was clicked
    });
  }
});
