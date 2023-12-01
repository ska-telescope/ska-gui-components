import React from 'react';
import { AlertColorTypes, AlertVariantTypes } from '../Alert/Alert';
import AlertCard from './AlertCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const DUMMY_DATA = [
  {
    color: AlertColorTypes.Success,
    title: 'SUCCESS',
    variant: AlertVariantTypes.Filled,
    value: 0,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Info,
    title: 'INFO',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Warning,
    title: 'WARNING',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Error,
    title: 'ERROR',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Success,
    title: 'SUCCESS',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Info,
    title: 'INFO',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Warning,
    title: 'WARNING',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Error,
    title: 'ERROR',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: false,
  },
];

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<AlertCard />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Outlined with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <AlertCard array={DUMMY_DATA} variant={AlertVariantTypes.Outlined} testId="testId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with no title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <AlertCard array={DUMMY_DATA} variant={AlertVariantTypes.Filled} testId="testId" />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Outlined with title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <AlertCard
            title="TITLE"
            array={DUMMY_DATA}
            variant={AlertVariantTypes.Outlined}
            testId="testId"
          />
        </ThemeProvider>
      );
    });
    it('Theme ' + theTheme + ': Filled with title', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <AlertCard
            title="TITLE"
            array={DUMMY_DATA}
            testId="testId"
            variant={AlertVariantTypes.Filled}
          />
        </ThemeProvider>
      );
    });
  }
  it('renders : with a provided function', () => {
    cy.mount(
      <AlertCard
        title="alertCard.title"
        array={DUMMY_DATA}
        clickFunction={cy.stub().as('clicked')}
        testId="AlertCard"
      />
    );
    cy.get('[data-testid="AlertCard"]').click({ multiple: true });
    // TODO Validate that the button was clicked
  });
});
