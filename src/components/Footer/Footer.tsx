import React from 'react';
import { AppBar, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
  testId: string;
}

export function Footer({
  ariaDescription = 'Sticky Panel at the bottom of the page',
  ariaTitle = 'SKAOFooter',
  children,
  testId,
}: FooterProps) {
  const fullYear = new Date().getFullYear();
  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      sx={{ borderTop: '1px solid darkgrey', bottom: 0, top: 'auto' }}
    >
      <Grid m={1} container direction="row" justifyContent="space-between">
        <Grid item>
          <IconButton
            sx={{ margin: 0, padding: 0 }}
            aria-label="Copyright information"
            color="inherit"
          >
            <Copyright />
            <Typography>Copyright {fullYear}</Typography>
          </IconButton>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
