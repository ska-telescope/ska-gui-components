import React, { MouseEventHandler, ReactNode } from 'react';
import { AppBar, Box, Grid, Typography } from '@mui/material';
import {
  Help,
  Logo,
  Symbol,
  Telescope,
  TELESCOPE_LOW,
  TELESCOPE_MID,
  THEME_DARK,
  THEME_LIGHT,
} from '@ska-telescope/ska-javascript-components';
import { OurIconButton } from '../IconButton/IconButton'; 
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
  useBrowserStorage?: boolean;
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
  useBrowserStorage = false,
  useSymbol = false,
  children,
}: HeaderProps): JSX.Element {

  const setThemeMode = () => localStorage.setItem('skao_theme_mode', getThemeMode() === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  const getThemeMode = () => useBrowserStorage ? localStorage.getItem('skao_theme_mode') : storage.themeMode;
  const themeToggle = () => useBrowserStorage ? setThemeMode() : storage.toggleTheme();

  const setHelpMode = () => localStorage.setItem('skao_show_help', localStorage.getItem('skao_show_help') === 'true' ? 'false' : 'true');
  const helpToggle = () => useBrowserStorage ? setHelpMode() : (storage.helpToggle ? storage.helpToggle() : null);

  const getHelpStorage = () => storage.help && storage.help.hasOwnProperty('content') && storage.help.content ? storage.help.content : null;
  const getHelpBrowser = () => sessionStorage.getItem('skao_help_content');
  const getHelp = () => showHelp && useBrowserStorage ? getHelpBrowser() : getHelpStorage();
  
  const setTelescopeStorage = () => storage.updateTelescope ? storage.updateTelescope(event) : null;
  const setTelescopeBrowser = () => localStorage.setItem('skao_telescope', JSON.stringify(getTelescope() === TELESCOPE_LOW ? TELESCOPE_MID : TELESCOPE_LOW));
  const setTelescope = () => useBrowserStorage ? setTelescopeBrowser() : setTelescopeStorage();
  const getTelescopeStorage = () => storage.telescope;
  const getTelescopeBrowser = () => {
    const obj = localStorage.getItem('skao_telescope');
    if (!obj) { 
      localStorage.setItem('skao_telescope', JSON.stringify(TELESCOPE_LOW));
      return TELESCOPE_LOW;
    }
    return JSON.parse(obj);
  };
  const getTelescope = () => useBrowserStorage ? getTelescopeBrowser() : getTelescopeStorage();
  
  const isDarkTheme = getThemeMode() === THEME_DARK;
  const flatten = false; // TODO : Need to implement user preferences

  const updateTel = () => {() => setTelescope()};

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
            <OurIconButton
              ariaTitle="skaWebsite"
              onClick={() => openLink(SKAO_URL)}
              icon={useSymbol ? (
                <Symbol dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
              ) : (
                <Logo dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
              )}
              toolTip={toolTip?.skao}
            >
            </OurIconButton>
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
            {selectTelescope && getTelescope() && (
              <TelescopeSelector telescope={getTelescope()} updateTelescope={updateTel} />
            )}
            {docs?.url && (
              <OurIconButton
                ariaTitle="document icon"
                onClick={() => openLink(docs.url)}
                icon={<DescriptionIcon />}
                toolTip={docs?.tooltip}
                />
            )}
            {getHelp() && (
              <OurIconButton
                ariaTitle="help icon"
                onClick={() => helpToggle()}
                icon={<HelpIcon />}
                toolTip={getHelp() as ReactNode}
              />
            )}
            <OurIconButton
              ariaTitle="light/dark mode"
              onClick={() => themeToggle()}
              icon={isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
              toolTip={toolTip.mode}
            />
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
