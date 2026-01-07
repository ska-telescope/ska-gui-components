import { JSX, ReactNode, useState } from 'react';
import { AppBar, Box, Grid, Paper, Typography, useTheme, Drawer } from '@mui/material';
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
import FeedbackIcon from '../Icons/classic/FeedbackIcon';
import HelpIcon from '../Icons/circle/HelpIcon';
import PaletteIcon from '../Icons/classic/PaletteIcon';
import { Help } from '../HelpModal/HelpModal';
import Children from '../../utils/types/types';
import ColorSchemeContent from '../ColorSchemeContent/ColorSchemeContent';

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
  accessibility?: number;
  accessibilityUpdate?: (value: number) => void;
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
  themeMode: string;
  toggleTheme: Function;
  updateTelescope?: Function;
};

const LOGO_HEIGHT = 30;
const SKAO_URL = 'https://www.skao.int/';
const APP_BAR_HEIGHT = 64; // adjust if your AppBar height differs

function openLink(link: string) {
  window.open(link, '_blank');
}

export interface HeaderProps {
  ariaDescription?: string;
  ariaTitle?: string;
  docs?: { tooltip: string; url: string };
  feedback?: { tooltip: string; url: string };
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
  accessibility?: boolean;
  accessibilityColor?: string[];
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  docs = { tooltip: '', url: '' },
  feedback = { tooltip: '', url: '' },
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
  accessibility = false,
  accessibilityColor = [],
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

  const getHelpBrowser = () => sessionStorage.getItem('skao_help_content');
  const getHelp = () => (showHelp ? (useBrowserStorage ? getHelpBrowser() : '') : '');

  const getTelescopeStorage = () => (storage?.telescope ? storage.telescope : TELESCOPE_LOW);
  const setTelescopeStorage = () => {
    const currentTelescope = getTelescopeStorage();
    if (storage.updateTelescope) {
      const newTelescope = currentTelescope === TELESCOPE_LOW ? TELESCOPE_MID : TELESCOPE_LOW;
      storage.updateTelescope(newTelescope);
    }
  };

  const isDarkTheme = getThemeMode() === THEME_DARK;
  const flatten = false; // TODO : Need to implement user preferences

  const updateTel = () => {
    setTelescopeStorage();
  };

  // Drawer state for accessibility panel
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      <AppBar
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        aria-hidden={false}
        data-testid={testId}
        color="primary"
        position="fixed"
        enableColorOnDark
        elevation={0}
        sx={{ borderBottom: '1px solid darkgrey', height: APP_BAR_HEIGHT }}
      >
        <Grid container alignItems="center" direction="row" justifyContent="space-between">
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
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
                <Typography data-testid="headerTitleId" variant="h5">
                  | {title.toUpperCase()}
                </Typography>
              )}
            </Box>
          </Item>
          {children && (
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{children}</Item>
          )}
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
            <Box mr={1} display="flex" justifyContent="flex-end" alignItems="center">
              <Box mr={1} display="flex" justifyContent="flex-end" alignItems="center">
                {loginComponent}
              </Box>
              {selectTelescope && getTelescopeStorage() && (
                <TelescopeSelector telescope={getTelescopeStorage()} updateTelescope={updateTel} />
              )}
              {feedback?.url && (
                <OurIconButton
                  ariaTitle="feedback icon"
                  onClick={() => openLink(feedback.url)}
                  icon={<FeedbackIcon colorFG={useTheme().palette.primary.contrastText} />}
                  toolTip={feedback?.tooltip}
                />
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
              {accessibility ? (
                <OurIconButton
                  ariaTitle="color settings"
                  onClick={toggleDrawer}
                  icon={<PaletteIcon colorFG={useTheme().palette.primary.contrastText} />}
                  toolTip={toolTip.mode}
                />
              ) : (
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
              )}
            </Box>
          </Item>
        </Grid>
      </AppBar>

      {accessibility && (
        <Drawer
          variant="persistent"
          anchor="right"
          open={openDrawer}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              minWidth: 300,
              top: APP_BAR_HEIGHT, // offset below header
              height: `calc(100% - ${APP_BAR_HEIGHT * 2}px)`,
            },
          }}
        >
          <ColorSchemeContent
            colors={accessibilityColor}
            storage={storage}
            toolTip={toolTip}
            useBrowserStorage={useBrowserStorage}
          />
        </Drawer>
      )}
    </>
  );
}

export default Header;
