import React from 'react';
import { styled } from '@mui/material/styles';

import { AppBar, Grid, IconButton, Toolbar, useTheme } from '@mui/material';
import { Logo } from '@ska-telescope/ska-javascript-components';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const LOGO_HEIGHT = 30;
const SKAO_URL = 'https://www.skao.int/';

function openLink(link: string) {
  window.open(link, '_blank');
}

const PREFIX = 'Header';
const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  appBarShift: `${PREFIX}-appBarShift`,
  menuButton: `${PREFIX}-menuButton`,
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`& .${classes.appBar}`]: {
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  [`& .${classes.appBarShift}`]: {
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  themeToggle: Function;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
}

export function Header({ themeToggle, children }: HeaderProps) {
  const isDarkTheme = useTheme().palette.mode === 'dark';

  const handleThemeToggle = () => {
    themeToggle();
  };

  return (
    <Root className={classes.root}>
      <AppBar id="headerId" color="primary" position="fixed" enableColorOnDark>
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between">
            <IconButton
              aria-label="skaWebsite"
              sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
              color="inherit"
              onClick={() => openLink(SKAO_URL)}
            >
              <Logo dark={!isDarkTheme} height={LOGO_HEIGHT} />
            </IconButton>
            {children}
            <IconButton
              aria-label="light/dark mode"
              sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 1 }}
              onClick={handleThemeToggle}
              color="inherit"
            >
              {isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

Header.defaultProps = {
  children: null,
};

export default Header;
