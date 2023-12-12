import React from 'react';
import CopyrightModal from '../CopyrightModal/CopyrightModal';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const closeFunc = () => {};

describe('<CopyrightModal />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <CopyrightModal closeFunc={closeFunc} />
        </ThemeProvider>
      );
    });
  }
});
