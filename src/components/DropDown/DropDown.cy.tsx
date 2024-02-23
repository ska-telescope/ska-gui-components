import React from 'react';
import DropDown from './DropDown';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = '';
const DUMMY_OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

describe('<DropDown />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <DropDown label="Label" options={DUMMY_OPTIONS} testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <DropDown
            label="Label"
            options={DUMMY_OPTIONS}
            testId="testId"
            value={theValue}
            disabled
          />
        </ThemeProvider>,
      );
      // TODO : Check it is disabled
    });
    it('Theme ' + theTheme + ' : Required ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <DropDown
            label="Label"
            options={DUMMY_OPTIONS}
            testId="testId"
            value={theValue}
            required
          />
        </ThemeProvider>,
      );
      // TODO : Check it is required
    });
    it('Theme ' + theTheme + ' : HelperText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <DropDown
            label="Label"
            options={DUMMY_OPTIONS}
            testId="testId"
            value={theValue}
            helperText="HELPER TEXT"
          />
        </ThemeProvider>,
      );
      // TODO : Check that helperText is visible
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <DropDown
            label="Label"
            options={DUMMY_OPTIONS}
            testId="testId"
            value={theValue}
            errorText="ERROR TEXT"
          />
        </ThemeProvider>,
      );
      // TODO : Check that errorText is shown and the colouring is correct
    });
  }
});
