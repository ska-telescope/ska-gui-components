import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Grid, Toolbar } from '@mui/material';

const PREFIX = 'Footer';
const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`& .${classes.appBar}`]: {
    top: '92vh',
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export interface FooterProps {
  // eslint-disable-next-line no-undef
  children?: JSX.Element[];
}

export function Footer({ children }: FooterProps) {
  return (
    <Root className={classes.root}>
      <AppBar
        id="footerId"
        color="primary"
        position="fixed"
        enableColorOnDark
        className={classes.appBar}
      >
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between">
            {children}
          </Grid>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

Footer.defaultProps = {
  children: null,
};

export default Footer;
