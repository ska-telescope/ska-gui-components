import React from 'react';
import TickBox from './TickBox';
import { CssBaseline, ThemeProvider } from '@mui/material/index.js';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { LABEL_POSITION } from '../EntryField/EntryField';

const THEME = [THEME_DARK, THEME_LIGHT];

const ARIA_DESC = 'ARIA DESCRIPTION';
const ARIA_TITLE = 'ARIA TITLE';
const TEST_FONTSIZE = 40;

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Accessibility ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox ariaDescription={ARIA_DESC} testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox testId="testId" disabled />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Label ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox label="Label" testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Label, End ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox label="Label" labelPosition={LABEL_POSITION.END} testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Label, Top ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox label="Label" labelPosition={LABEL_POSITION.TOP} testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Label, Bottom ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox label="Label" labelPosition={LABEL_POSITION.BOTTOM} testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Label, End ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox fontSize={TEST_FONTSIZE} label="Label" testId="testId" />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : DefaultChecked ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <TickBox checked={true} testId="testId" />
        </ThemeProvider>,
      );
    });
  }
});
