import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SchemaIcon from '@mui/icons-material/Schema';
import HistoryIcon from '@mui/icons-material/History';
import Menu from './menu';

const menuItemsFunction = () => {
  const results = [
    {
      title: 'title 1',
      path: 'path 1',
      icon: () => <ImportantDevicesIcon />,
    },
    {
      title: 'title 2',
      path: 'path 2',
      icon: () => <SchemaIcon />,
    },
    {
      title: 'title 3',
      path: 'path 3',
      icon: () => <HistoryIcon />,
    },
  ];
  return results;
};

export default {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <BrowserRouter>
    <Menu {...args} />
  </BrowserRouter>
);
export const MenuDisplay = Template.bind({});

MenuDisplay.parameters = {
  backgrounds: { default: 'light' },
};

MenuDisplay.args = {
  menuItems: menuItemsFunction,
  topMenu: false,
};
