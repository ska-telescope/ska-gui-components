import React from 'react';
import { AppBar, Grid, Stack, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import Button, { ButtonColorTypes, ButtonVariantTypes } from '../Button/Button';
import { GUI_COMPONENTS_VERSION } from '../version';
import { Tooltip } from '@mui/material';
import Children from '../../utils/types/types';

export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;

  children?: Children;
  copyrightFunc?: Function;
  testId?: string;
  version?: string;
  versionTooltip?: string;
}

export function Footer({
  ariaDescription = 'Sticky Panel at the bottom of the page',
  ariaTitle = 'SKAOFooter',
  children,
  copyrightFunc,
  testId = 'footer-testId',
  version = GUI_COMPONENTS_VERSION,
  versionTooltip,
}: FooterProps) {
  const fullYear = new Date().getFullYear();

  function openCopyright() {
    copyrightFunc ? copyrightFunc(true) : null;
  }

  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-hidden={false}
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      sx={{ borderTop: '1px solid darkgrey', bottom: 0, top: 'auto' }}
    >
      <Grid m={0} pr={1} container direction="row" justifyContent="space-between">
        <Grid item>
          <Stack direction="row" alignItems="center" gap={1}>
            <Button
              ariaDescription="copyright link"
              color={ButtonColorTypes.Inherit}
              onClick={() => openCopyright()}
              icon={<Copyright />}
              label={'SKAO ' + fullYear}
              testId="copyrightLinkTestId"
              variant={ButtonVariantTypes.Text}
            />
            <Typography>|</Typography>
            <Tooltip title={versionTooltip}>
              <Typography>{version}</Typography>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
