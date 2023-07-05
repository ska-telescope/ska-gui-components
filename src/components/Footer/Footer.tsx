import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';

export interface FooterProps {
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
}

export function Footer({ children }: FooterProps) {
  return (
    <AppBar
      id="footerId"
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
  children: null,
};

export default Footer;
