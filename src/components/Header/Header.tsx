import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Tooltip, useTheme } from '@mui/material';
import { Logo } from '@ska-telescope/ska-javascript-components';
import { TelescopeSelector } from '../TelescopeSelector/TelescopeSelector';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
  themeToggle: Function;
  toolTip?: { skao: string; mode: string };
  children?: JSX.Element[];
}

export function Header({
  ariaDescription = 'Sticky Panel at the top of the page',
  ariaTitle = 'SKAOHeader',
  selectTelescope = true,
  testId,
  themeToggle,
  toolTip = { skao: 'SKAO', mode: '' },
  children,
}: HeaderProps): JSX.Element {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const showThemeToggle = () => typeof themeToggle !== 'undefined';

  const handleThemeToggle = () => {
    themeToggle();
  };

  return (
    <AppBar
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testid={testId}
      color="primary"
      position="fixed"
      enableColorOnDark
      elevation={0}
      sx={{ borderBottom: '1px solid darkgrey' }}
    >
      <Toolbar>
        <Grid container alignItems="center" direction="row" justifyContent="space-between">
          <Grid item xs={3}>
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
            {selectTelescope && <TelescopeSelector />}
          </Grid>
          <Grid item>{children}</Grid>
          <Grid>
            {showThemeToggle() && (
              <Tooltip title={toolTip?.mode} arrow>
                <IconButton
                  aria-label="light/dark mode"
                  sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
                  onClick={handleThemeToggle}
                  color="inherit"
                >
                  {isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
