import { JSX, ReactNode } from 'react';
import { AppBar, Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Logo,
  Symbol,
  TELESCOPE_LOW,
  TELESCOPE_MID,
  THEME_DARK,
  THEME_LIGHT,
} from '@ska-telescope/ska-javascript-components';
import { OurIconButton } from '../IconButton/IconButton';
import { Telescope, TelescopeSelector } from '../TelescopeSelector/TelescopeSelector';
import DarkModeIcon from '../Icons/classic/DarkModeIcon';
import LightModeIcon from '../Icons/classic/LightModeIcon';
import DocumentIcon from '../Icons/classic/DocumentIcon';
import HelpIcon from '../Icons/circle/HelpIcon';
import { Help } from '../HelpModal/HelpModal';
import Children from '../../utils/types/types';

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
  loginComponent?: JSX.Element | null;
  selectTelescope?: boolean;
  showHelp?: boolean;
  storage: Storage;
  testId?: string;
  title?: string;
  toolTip?: { skao: string; mode: string };
  toolTipPlacement?: string;
  useBrowserStorage?: boolean;
  useSymbol?: Boolean;
  children?: Children;
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  docs = { tooltip: '', url: '' },
  loginComponent = null,
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
  const setThemeMode = () =>
    localStorage.setItem(
      'skao_theme_mode',
      getThemeMode() === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    );
  const getThemeMode = () =>
    useBrowserStorage ? localStorage.getItem('skao_theme_mode') : storage.themeMode;
  const themeToggle = () => (useBrowserStorage ? setThemeMode() : storage.toggleTheme());

  const setHelpMode = () =>
    localStorage.setItem(
      'skao_show_help',
      localStorage.getItem('skao_show_help') === 'true' ? 'false' : 'true',
    );
  const helpToggle = () =>
    useBrowserStorage ? setHelpMode() : storage.helpToggle ? storage.helpToggle() : null;

  const getHelpStorage = () =>
    storage.help && storage.help.hasOwnProperty('content') && storage.help.content
      ? storage.help.content
      : null;
  const getHelpBrowser = () => sessionStorage.getItem('skao_help_content');
  const getHelp = () => (showHelp ? (useBrowserStorage ? getHelpBrowser() : '') : ''); // TREVOR getHelpStorage());

  const setTelescopeStorage = () =>
    storage.updateTelescope ? storage.updateTelescope(event) : null;
  const setTelescopeBrowser = () =>
    localStorage.setItem(
      'skao_telescope',
      JSON.stringify(getTelescope() === TELESCOPE_LOW ? TELESCOPE_MID : TELESCOPE_LOW),
    );
  const setTelescope = () => (useBrowserStorage ? setTelescopeBrowser() : setTelescopeStorage());
  const getTelescopeStorage = () => storage.telescope;
  const getTelescopeBrowser = () => {
    const obj = localStorage.getItem('skao_telescope');
    if (!obj) {
      localStorage.setItem('skao_telescope', JSON.stringify(TELESCOPE_LOW));
      return TELESCOPE_LOW;
    }
    return JSON.parse(obj);
  };
  const getTelescope = () => (useBrowserStorage ? getTelescopeBrowser() : getTelescopeStorage());

  const isDarkTheme = getThemeMode() === THEME_DARK;
  const flatten = false; // TODO : Need to implement user preferences

  const updateTel = () => {
    () => setTelescope();
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
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
          <Box display="flex" justifyContent="flex-start">
            <OurIconButton
              ariaTitle="skaWebsite"
              onClick={() => openLink(SKAO_URL)}
              icon={
                useSymbol ? (
                  <Symbol dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
                ) : (
                  <Logo dark={isDarkTheme} flatten={flatten} height={LOGO_HEIGHT} />
                )
              }
              testId={'skaWebsite'}
              toolTip={toolTip?.skao}
            ></OurIconButton>
            {title && (
              <Typography mt={1} data-testid="headerTitleId" variant="h5">
                | {title.toUpperCase()}
              </Typography>
            )}
          </Box>
        </Item>
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{children}</Item>
        <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
          <Box mr={1} display="flex" justifyContent="flex-end">
            <Box mr={1} display="flex" justifyContent="flex-end">
              {loginComponent}
            </Box>
            {selectTelescope && getTelescope() && (
              <TelescopeSelector telescope={getTelescope()} updateTelescope={updateTel} />
            )}
            {docs?.url && (
              <OurIconButton
                ariaTitle="document icon"
                onClick={() => openLink(docs.url)}
                icon={<DocumentIcon colorFG={useTheme().palette.primary.contrastText} />}
                toolTip={docs?.tooltip}
              />
            )}
            {getHelp() && (
              <OurIconButton
                ariaTitle="help icon"
                onClick={() => helpToggle()}
                icon={<HelpIcon colorFG={useTheme().palette.primary.contrastText} />}
                toolTip={getHelp() as ReactNode}
              />
            )}
            <OurIconButton
              ariaTitle="light/dark mode"
              onClick={() => themeToggle()}
              icon={
                isDarkTheme ? (
                  <DarkModeIcon colorFG={useTheme().palette.primary.contrastText} />
                ) : (
                  <LightModeIcon colorFG={useTheme().palette.primary.contrastText} />
                )
              }
              toolTip={toolTip.mode}
            />
          </Box>
        </Item>
      </Grid>
    </AppBar>
  );
}

export default Header;
