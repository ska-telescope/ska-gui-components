import React from 'react';
import { AppBar, Grid, IconButton, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import { GUI_COMPONENTS_VERSION } from '../version';
export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
  testId: string;
  version?: string;
}

export function Footer({
  ariaDescription = 'Sticky Panel at the bottom of the page',
  ariaTitle = 'SKAOFooter',
  children,
  testId,
  version = GUI_COMPONENTS_VERSION,
}: FooterProps) {
  const fullYear = new Date().getFullYear();
  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      aria-hidden='false'
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      sx={{ borderTop: '1px solid darkgrey', bottom: 0, top: 'auto' }}
    >
      <Grid m={0} pr={1} container direction="row" justifyContent="space-between">
        <Grid item>
          <IconButton
            sx={{ margin: 0, padding: 0 }}
            aria-label="Copyright information"
            color="inherit"
          >
            <Copyright />
            <Typography>
              Copyright {fullYear} | {version}{' '}
            </Typography>
          </IconButton>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
