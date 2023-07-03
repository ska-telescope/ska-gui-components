import React from 'react';
import { AppBar, Grid, IconButton, Toolbar, Tooltip, useTheme } from '@mui/material';
import { Logo } from '@ska-telescope/ska-javascript-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';

const LOGO_HEIGHT = 30;
const SKAO_URL = 'https://www.skao.int/';

function openLink(link: string) {
  window.open(link, '_blank');
}

export interface HeaderProps {
  themeToggle: Function;
  children?: JSX.Element[];
}

export function Header({ themeToggle, children }: HeaderProps): JSX.Element {
  const { t } = useTranslation();
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const showThemeToggle = () => typeof themeToggle !== 'undefined';

  const handleThemeToggle = () => {
    themeToggle();
  };

  return (
    <AppBar
      id="headerId"
      color="primary"
      position="fixed"
      enableColorOnDark
      elevation={0}
      sx={{ borderBottom: '1px solid darkgrey' }}
    >
      <Toolbar>
        <Grid container alignItems="center" direction="row" justifyContent="space-between">
          <Tooltip title={t('toolTip.button.skao')} arrow>
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
          {children}
          {showThemeToggle() && (
            <Tooltip title={t('toolTip.button.mode')} arrow>
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
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  children: null,
};

export default Header;
