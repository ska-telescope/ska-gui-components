import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress/react18';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SchemaIcon from '@mui/icons-material/Schema';
import HistoryIcon from '@mui/icons-material/History';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Menu from './menu';

const topMenu = false;

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

describe('<Menu/>', () => {
  it('renders', () => {
    // eslint-disable-next-line no-undef
    // cy.stub(storageObject, 'useStore').resolves(mockTelescope);

    mount(
      <BrowserRouter>
        <Menu menuItems={menuItemsFunction} topMenu={topMenu} />
      </BrowserRouter>
    );
  });
});
