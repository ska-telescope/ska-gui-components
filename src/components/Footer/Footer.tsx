import React from 'react';
import {
  AppBar,
  Grid,
  Paper,
  PopperPlacementType,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CopyrightIcon from '../Icons/circle/CopyrightIcon';
import Button, { ButtonColorTypes, ButtonVariantTypes } from '../Button/Button';
import { GUI_COMPONENTS_VERSION } from '../version';
import { Tooltip } from '@mui/material';
import Children from '../../utils/types/types';

export interface FooterProps {
  ariaDescription?: string;
  ariaTitle?: string;

  childrenMiddle?: Children;
  children?: Children;
  copyrightFunc?: Function;
  toolTipPlacement?: string;
  testId?: string;
  version?: string;
  versionTooltip?: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export function Footer({
  ariaDescription = 'Sticky Panel at the bottom of the page',
  ariaTitle = 'SKAOFooter',
  childrenMiddle,
  children,
  copyrightFunc,
  testId = 'footer-testId',
  toolTipPlacement = 'top',
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
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
          <Stack direction="row" alignItems="center" gap={1}>
            <Button
              ariaDescription="copyright link"
              color={ButtonColorTypes.Inherit}
              onClick={() => openCopyright()}
              icon={<CopyrightIcon colorFG={useTheme().palette.secondary.contrastText} />}
              label={'SKAO ' + fullYear}
              testId="copyrightLinkTestId"
              variant={ButtonVariantTypes.Text}
            />
            <Typography>|</Typography>
            <Tooltip placement={toolTipPlacement as PopperPlacementType} title={versionTooltip}>
              <Typography>{version}</Typography>
            </Tooltip>
          </Stack>
        </Item>
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{childrenMiddle}</Item>
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{children}</Item>
      </Grid>
    </AppBar>
  );
}

export default Footer;
