import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
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
    testId: 'testId',
    title: 'ska-gui-components',
    toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
    children: ['HERE ', 'ARE ', 'SOME ', 'CHILDREN'],
  },
};
