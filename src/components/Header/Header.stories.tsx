import { TELESCOPE_LOW, THEME_LIGHT } from '@ska-telescope/ska-javascript-components';
import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const theStorage = {
  help: null,
  helpLabel: 'Help',
  colorLabel: 'Color',
  helpToggle: null,
  telescope: TELESCOPE_LOW,
  themeMode: {
    mode: THEME_LIGHT,
  },
  toggleTheme: null,
  updateTelescope: null,
  flatten: false,
};

export const Default = {
  args: {
    accessibility: true,
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    docs: {
      label: 'Docs',
      tooltip: 'THIS IS A TOOLTIP',
      url: 'https://www.bbc.co.uk/',
    },
    feedback: {
      label: 'Feedback',
      tooltip: 'THIS IS A TOOLTIP',
      url: 'https://www.bbc.co.uk/',
    },
    notification: {
      label: 'Notifications',
      tooltip: 'View notifications',
      onClick: () => console.log('Notification clicked'),
      count: 3,
    },
    selectTelescope: true,
    storage: theStorage,
    showHelp: true,
    testId: 'testId',
    title: 'ska-gui-components',
    toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
    useSymbol: false,
    useBrowserStorage: false,
    children: ['HERE ', 'ARE ', 'SOME ', 'CHILDREN'],
  },
};

export const WithNotifications = {
  args: {
    ...Default.args,
    notification: {
      label: 'Notifications',
      tooltip: 'You have 5 new notifications',
      onClick: () => alert('Opening notifications panel'),
      count: 5,
    },
  },
};

export const WithoutNotificationCount = {
  args: {
    ...Default.args,
    notification: {
      label: 'Notifications',
      tooltip: 'View notifications',
      onClick: () => console.log('Notification clicked'),
    },
  },
};
