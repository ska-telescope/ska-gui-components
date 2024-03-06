import React from 'react';
import EntryField, { ENTRY_LABEL_POSITION } from './EntryField';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = '';

describe('<EntryField />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' Label TOP', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField
            label="Label"
            labelPosition={ENTRY_LABEL_POSITION.TOP}
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
          <EntryField
            label="Label"
            labelPosition={ENTRY_LABEL_POSITION.BOTTOM}
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
          <EntryField
            label="Label"
            labelPosition={ENTRY_LABEL_POSITION.START}
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
          <EntryField
            label="Label"
            labelPosition={ENTRY_LABEL_POSITION.END}
            testId="testId"
            value={theValue}
          />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" prefix=">" suffix="<" testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} disabled />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Required ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} required />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : HelperText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} helperText="HELPER TEXT" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} errorText="ERROR TEXT" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : ErrorText ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <EntryField label="Label" testId="testId" value={theValue} errorText="ERROR TEXT" />
        </ThemeProvider>,
      );
    });
  }
});
