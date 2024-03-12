import React from 'react';
import IconButton from './IconButton';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

const ARIA_DESC = 'ARIA DESCRIPTION';
const ARIA_TITLE = 'ARIA TITLE';
const TOOLTIP = 'TOOLTIP';

describe('<IconButton />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <IconButton
            ariaTitle={ARIA_TITLE}
            ariaDescription={ARIA_DESC}
            icon={<MyLocationIcon />}
            testId="testId"
            toolTip={TOOLTIP}
          />
        </ThemeProvider>,
      );
    });
  }
});
