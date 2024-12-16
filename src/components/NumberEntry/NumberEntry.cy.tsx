import React from 'react';
import NumberEntry from './NumberEntry';
import { CssBaseline, ThemeProvider } from '@mui/material/index.js';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { LABEL_POSITION } from '../EntryField/EntryField';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = '';

describe('<NumberEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry label="Label" testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' Label TOP', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry
            label="Label"
            labelPosition={LABEL_POSITION.TOP}
            testId="testId"
            value={theValue}
          />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' Label BOTTOM', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry
            label="Label"
            labelPosition={LABEL_POSITION.BOTTOM}
            testId="testId"
            value={theValue}
          />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' Label START', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry
            label="Label"
            labelPosition={LABEL_POSITION.START}
            testId="testId"
            value={theValue}
          />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' Label END', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry
            label="Label"
            labelPosition={LABEL_POSITION.END}
            testId="testId"
            value={theValue}
          />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry label="Label" testId="testId" value={theValue} disabled />
        </ThemeProvider>,
      );
      // TODO : Check it is disabled
    });
    it('Theme ' + theTheme + ' : Required ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry label="Label" testId="testId" value={theValue} required />
        </ThemeProvider>,
      );
      // TODO : Check it is required
    });
    it('Theme ' + theTheme + ' : HelperText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry label="Label" testId="testId" value={theValue} helperText="HELPER TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that helperText is visible
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry label="Label" testId="testId" value={theValue} errorText="ERROR TEXT" />
        </ThemeProvider>,
      );
      // TODO : Check that errorText is shown and the colouring is correct
    });
  }
});
