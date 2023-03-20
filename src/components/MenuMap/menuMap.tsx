import React, { ReactElement, JSXElementConstructor } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from '@mui/material';

const COL_01 = 'white';
const COL_02 = 'black';

export interface MenuMapProps {
  open: boolean;
  menuItems: {
    path: string;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: () => ReactElement<any, JSXElementConstructor<any>>;
  }[];
  topMenu?: boolean;
}

export function MenuMap({ open, menuItems, topMenu }: MenuMapProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const isDarkTheme = useTheme().palette.mode === 'dark';

  function fillColor(): string {
    return isDarkTheme ? COL_01 : COL_02;
  }

  function navigateTo(path: string): string {
    return topMenu ? path : `.${path}`;
  }

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {menuItems.map((route, index) => {
        const isSelected = () => selectedIndex === index;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <NavLink key={index} to={navigateTo(route.path)}>
            <ListItemButton
              onClick={(event) => handleListItemClick(event, index)}
              selected={isSelected()}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.dark',
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'primary.dark',
                },
                ':hover': {
                  backgroundColor: 'primary.main',
                },
                'svg path': { fill: fillColor },
              }}
            >
              <Tooltip title={route.title} placement="right" arrow>
                <ListItemIcon
                  tabIndex={-1}
                  role="button"
                  aria-label={route.title}
                  sx={{ minWidth: '30px', padding: '5px', 'svg path': { fill: fillColor } }}
                >
                  {route.icon()}
                </ListItemIcon>
              </Tooltip>
              {open && (
                <ListItemText primaryTypographyProps={{ color: 'secondary.main' }}>
                  {route.title}
                </ListItemText>
              )}
            </ListItemButton>
          </NavLink>
        );
      })}
    </>
  );
}

MenuMap.defaultProps = {
  topMenu: false,
};

export default MenuMap;
