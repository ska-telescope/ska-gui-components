import React from 'react';
import NumberEntry2 from './NumberEntry2';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import { LABEL_POSITION } from '../EntryField/EntryField';

const THEME = [THEME_DARK, THEME_LIGHT];

const theValue = 10;

describe('<NumberEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry2 fieldName="FIELDNME" setValue={() => {}} testId="testId" value={theValue} />
        </ThemeProvider>,
      );
    });
    it('Theme ' + theTheme + ' : Disabled ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry2
            fieldName="FIELDNME"
            setValue={() => {}}
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
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry2
            fieldName="FIELDNME"
            setValue={() => {}}
            testId="testId"
            value={theValue}
            required
          />
        </ThemeProvider>,
      );
      // TODO : Check it is required
    });
    it('Theme ' + theTheme + ' : Prompt ', () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <NumberEntry2
            fieldName="FIELDNME"
            setValue={() => {}}
            testId="testId"
            value={theValue}
            prompt="HELPER TEXT"
          />
        </ThemeProvider>,
      );
      // TODO : Check that helperText is visible
    });
  }
});
