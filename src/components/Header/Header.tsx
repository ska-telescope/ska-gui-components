import React, { MouseEventHandler, ReactNode } from 'react';
import { AppBar, Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import {
  Help,
  Logo,
  Symbol,
  Telescope,
  THEME_DARK,
} from '@ska-telescope/ska-javascript-components';
import { TelescopeSelector } from '../TelescopeSelector/TelescopeSelector';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';

export type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
  themeMode: string;
  toggleTheme: Function;
  updateTelescope?: Function;
};

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
  storage: Storage;
  testId?: string;
  title?: string;
  toolTip?: { skao: string; mode: string };
  useSymbol?: Boolean;
  children?: JSX.Element[];
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  docs = { tooltip: '', url: '' },
  selectTelescope = true,
  storage,
  showHelp = false,
  testId = 'header-testId',
  title = '',
  toolTip = { skao: 'SKAO', mode: '' },
  useSymbol = false,
  children,
}: HeaderProps): JSX.Element {
  const isDarkTheme = storage.themeMode === THEME_DARK;
  const flatten = false; // TODO : Need to implement user preferences

  const hasHelp = () => {
    return (
      showHelp && storage.help && storage.help.hasOwnProperty('content') && storage.help.content
    );
  };
  const updateTel = (event: React.MouseEvent<HTMLElement>) => {
    storage.updateTelescope ? storage.updateTelescope(event) : null;
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
                {useSymbol ? (
                  <Symbol dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
                ) : (
                  <Logo dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
                )}
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
            {selectTelescope && storage.telescope && (
              <TelescopeSelector telescope={storage.telescope} updateTelescope={updateTel} />
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
              <Tooltip title={storage.help?.content as ReactNode} arrow>
                <IconButton
                  aria-label="help icon"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  color="inherit"
                  onClick={() => (storage.helpToggle ? storage.helpToggle() : null)}
                >
                  {<HelpIcon />}
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title={toolTip.mode} arrow>
              <IconButton
                aria-label="light/dark mode"
                sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                onClick={storage.toggleTheme as MouseEventHandler}
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
