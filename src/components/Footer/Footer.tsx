import React from 'react';
import { AppBar, Grid, Stack, Typography } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import Button, { ButtonColorTypes, ButtonVariantTypes } from '../Button/Button';
import { GUI_COMPONENTS_VERSION } from '../version';
import { Tooltip } from '@mui/material';

export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
  testId: string;
  version?: string;
  versionTooltip?: string;
}

export function Footer({
  ariaDescription = 'Sticky Panel at the bottom of the page',
  ariaTitle = 'SKAOFooter',
  children,
  testId,
  version = GUI_COMPONENTS_VERSION,
  versionTooltip,
}: FooterProps) {
  const fullYear = new Date().getFullYear();

  const COPYRIGHT_0 = 'Click below for latest information';
  const COPYRIGHT_1 = 'https://www.skao.int/en/487/copyright';
  const COPYRIGHT_2 = 'Copyright Information';

  function openCopyright() {
    window.open(COPYRIGHT_1, '_blank');
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
            <Copyright />
            <Tooltip
              title={
                <Stack>
                  <Typography variant="caption">{COPYRIGHT_0}</Typography>
                  <Button
                    ariaDescription="copyright link"
                    color={ButtonColorTypes.Inherit}
                    variant={ButtonVariantTypes.Text}
                    onClick={() => openCopyright()}
                    label={COPYRIGHT_2}
                    testId="copyrightLinkTestId"
                  />
                </Stack>
              }
            >
              <Typography>SKAO {fullYear}</Typography>
            </Tooltip>
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
