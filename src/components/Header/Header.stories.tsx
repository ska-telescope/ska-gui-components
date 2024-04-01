import { TELESCOPE_LOW, THEME_LIGHT } from '@ska-telescope/ska-javascript-components';
import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const theStorage = {
  help: null,
  helpToggle: null,
  telescope: TELESCOPE_LOW,
  themeMode: {
    mode: THEME_LIGHT,
  },
  toggleTheme: null,
  updateTelescope: null,
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    docs: {
      tooltip: 'THIS IS A TOOLTIP',
      url: 'https://www.bbc.co.uk/',
    },
    selectTelescope: true,
    storage: theStorage,
    testId: 'testId',
    title: 'ska-gui-components',
    toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
    children: ['HERE ', 'ARE ', 'SOME ', 'CHILDREN'],
  },
};
