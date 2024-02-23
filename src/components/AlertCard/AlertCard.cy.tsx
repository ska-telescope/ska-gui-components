import React from 'react';
import { AlertVariantTypes } from '../Alert/Alert';
import { ALERT_DATA } from './AlertData';
import AlertCard from './AlertCard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];
const SHOW_STATUS = [true, false];
const SHOW_STATUS_ICON = [true, false];
const VARIANT = [AlertVariantTypes.Outlined, AlertVariantTypes.Filled];

describe('<AlertCard />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme + ': Minimal implementation', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <AlertCard array={ALERT_DATA} testId="testId" />
        </ThemeProvider>,
      );
    });
    for (const variant of VARIANT) {
      for (const showStatus of SHOW_STATUS) {
        for (const showStatusIcon of SHOW_STATUS_ICON) {
          it(
            'Theme ' +
              theTheme +
              ': Variant = ' +
              variant +
              ', Show Status = ' +
              showStatus +
              ', Show Status Icon = ' +
              showStatusIcon +
              ' No Title',
            () => {
              cy.mount(
                <ThemeProvider theme={theme(theTheme)}>
                  <CssBaseline />
                  <AlertCard
                    array={ALERT_DATA}
                    showStatus={showStatus}
                    showStatusIcon={showStatusIcon}
                    testId="testId"
                    variant={variant}
                  />
                </ThemeProvider>,
              );
            },
          );
          it(
            'Theme ' +
              theTheme +
              ': Variant = ' +
              variant +
              ', Show Status = ' +
              showStatus +
              ', Show Status Icon = ' +
              showStatusIcon +
              ' Titled',
            () => {
              cy.mount(
                <ThemeProvider theme={theme(theTheme)}>
                  <CssBaseline />
                  <AlertCard
                    array={ALERT_DATA}
                    showStatus={showStatus}
                    showStatusIcon={showStatusIcon}
                    testId="testId"
                    title="Test Title"
                    variant={variant}
                  />
                </ThemeProvider>,
              );
            },
          );
        }
      }
    }
  }
});
