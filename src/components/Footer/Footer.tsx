import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';

export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
  testId: string;
}

export function Footer({ ariaDescription, ariaTitle, children, testId }: FooterProps) {
  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      sx={{ borderTop: '1px solid darkgrey', top: 'auto', bottom: 0 }}
    >
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between">
          {children}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Footer.defaultProps = {
  ariaDescription: 'Sticky Panel at the bottom of the page',
  ariaTitle: 'SKAOFooter',
  children: null,
};

export default Footer;
