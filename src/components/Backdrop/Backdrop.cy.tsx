import React from 'react';
import Backdrop from './Backdrop';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

describe('<DateEntry />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <Backdrop open={false}>
            <Typography variant="h4" component="div">
              BACKDROP IS CLOSED
            </Typography>
          </Backdrop>
        </ThemeProvider>,
      );

      cy.mount(
        <ThemeProvider theme={theme(THEME_LIGHT)}>
          <CssBaseline />
          <Backdrop open={false}>
            <Typography variant="h4" component="div">
              BACKDROP IS OPEN
            </Typography>
          </Backdrop>
        </ThemeProvider>,
      );
    });
  }
});
