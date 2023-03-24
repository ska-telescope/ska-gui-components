import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, IconButton, Paper, Tooltip } from '@mui/material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
// eslint-disable-next-line import/no-unresolved, import/extensions
import MenuMap from '../MenuMap/menuMap';

const PREFIX = 'Menu';
const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`& .${classes.menuButton}`]: {
    marginLeft: '14px',
  },
}));

export interface MenuProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  menuItems: Function;
  topMenu?: boolean;
}

export function Menu({ menuItems, topMenu }: MenuProps) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((o) => !o);
  };

  const menuItemsFunction = () => menuItems();

  return (
    <Root className={classes.root}>
      <Box m={1}>
        <Paper
          elevation={2}
          sx={{
            backgroundColor: 'secondary.contrastText',
            height: 'calc(100vh - 150px)',
            minWidth: '60px',
          }}
        >
          <Tooltip title="tooltip.resources.menuToggle" placement="right" arrow>
            <IconButton
              sx={{ '&:hover': { backgroundColor: 'primary.dark' }, ml: 2 }}
              color="inherit"
              aria-label="open drawer"
              onClick={handleToggle}
              className={classes.menuButton}
            >
              {!open && <KeyboardArrowRightOutlinedIcon />}
              {open && <KeyboardArrowLeftOutlinedIcon />}
            </IconButton>
          </Tooltip>
          <Divider orientation="horizontal" variant="middle" />
          <MenuMap open={open} menuItems={menuItemsFunction()} topMenu={topMenu} />
        </Paper>
      </Box>
    </Root>
  );
}

Menu.defaultProps = {
  topMenu: false,
};

export default Menu;
