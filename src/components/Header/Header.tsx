import React from 'react';
import { AppBar, Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Logo, THEME_DARK } from '@ska-telescope/ska-javascript-components';
import { storageObject } from '@ska-telescope/ska-gui-local-storage';
import { TelescopeSelector } from '../TelescopeSelector/TelescopeSelector';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HelpIcon from '@mui/icons-material/Help';

const LOGO_HEIGHT = 30;
const SKAO_URL = 'https://www.skao.int/';

function openLink(link: string) {
  window.open(link, '_blank');
}

export interface HeaderProps {
  ariaDescription?: string;
  ariaTitle?: string;
  selectTelescope?: boolean;
  testId: string;
  title?: string;
  toolTip?: { skao: string; mode: string };
  children?: JSX.Element[];
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  selectTelescope = true,
  testId,
  title = '',
  toolTip = { skao: 'SKAO', mode: '' },
  children,
}: HeaderProps): JSX.Element {
  const { help, helpContent, helpToggle, themeMode, toggleTheme } = storageObject.useStore();
  const isDarkTheme = themeMode.mode === THEME_DARK;

  helpContent('THIS IS A HELP MESSAGE');

  const hasHelp = () => {
    return true; // TODO : Add help validation for an object.
  };

  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-hidden={false}
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      elevation={0}
      sx={{ borderBottom: '1px solid darkgrey' }}
    >
      <Grid m={1} container alignItems="center" direction="row" justifyContent="space-between">
        <Grid item>
          <Box display="flex" justifyContent="flex-start">
            <Tooltip title={toolTip?.skao} arrow>
              <IconButton
                id={'skaWebsite'}
                aria-label="skaWebsite"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, m: 0 }}
                color="inherit"
                onClick={() => openLink(SKAO_URL)}
              >
                <Logo dark={!isDarkTheme} height={LOGO_HEIGHT} />
              </IconButton>
            </Tooltip>
            {title && (
              <Typography data-testid="headerTitleId" variant="h5">
                | {title.toUpperCase()}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item>{children}</Grid>
        <Grid item>
          {help.showHelp && (
            <Typography data-testid="headerTitleId" variant="h5">
              {help.content}
            </Typography>
          )}
        </Grid>
        <Grid item>
          <Box mr={1} display="flex" justifyContent="flex-end">
            {selectTelescope && <TelescopeSelector />}
            {hasHelp() && (
              <IconButton
                aria-label="help icon"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                color="inherit"
                onClick={() => helpToggle()}
              >
                {<HelpIcon />}
              </IconButton>
            )}
            <Tooltip title={help} arrow>
              <IconButton
                aria-label="light/dark mode"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                onClick={toggleTheme}
                color="inherit"
              >
                {isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
