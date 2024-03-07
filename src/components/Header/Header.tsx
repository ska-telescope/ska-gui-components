import React from 'react';
import { AppBar, Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { Logo, THEME_DARK } from '@ska-telescope/ska-javascript-components';
import { storageObject } from '@ska-telescope/ska-gui-local-storage';
import { TelescopeSelector } from '../TelescopeSelector/TelescopeSelector';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';

const LOGO_HEIGHT = 30;
const SKAO_URL = 'https://www.skao.int/';

function openLink(link: string) {
  window.open(link, '_blank');
}

export interface HeaderProps {
  ariaDescription?: string;
  ariaTitle?: string;
  docs?: { tooltip: string; url: string };
  selectTelescope?: boolean;
  showHelp?: boolean;
  testId: string;
  title?: string;
  toolTip?: { skao: string; mode: string };
  children?: JSX.Element[];
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  docs = { tooltip: '', url: '' },
  selectTelescope = true,
  showHelp = false,
  testId,
  title = '',
  toolTip = { skao: 'SKAO', mode: '' },
  children,
}: HeaderProps): JSX.Element {
  const { help, helpToggle, telescope, themeMode, toggleTheme, updateTelescope } =
    storageObject.useStore();
  const isDarkTheme = themeMode.mode === THEME_DARK;

  const hasHelp = () => {
    return showHelp && help && help.hasOwnProperty('content') && help.content;
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
                <Logo dark={isDarkTheme} height={LOGO_HEIGHT} />
              </IconButton>
            </Tooltip>
            {title && (
              <Typography mt={1} data-testid="headerTitleId" variant="h5">
                | {title.toUpperCase()}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item>{children}</Grid>
        <Grid item>
          <Box mr={1} display="flex" justifyContent="flex-end">
            {selectTelescope && (
              <TelescopeSelector telescope={telescope} updateTelescope={updateTelescope} />
            )}
            {docs?.url && (
              <Tooltip title={docs?.tooltip} arrow>
                <IconButton
                  aria-label="document icon"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  color="inherit"
                  onClick={() => openLink(docs.url)}
                >
                  {<DescriptionIcon />}
                </IconButton>
              </Tooltip>
            )}
            {hasHelp() && (
              <Tooltip title={help.content} arrow>
                <IconButton
                  aria-label="help icon"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  color="inherit"
                  onClick={() => helpToggle()}
                >
                  {<HelpIcon />}
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title={toolTip.mode} arrow>
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
