import Header from './Header';

function handleThemeToggle() {}

export default {
  title: 'Example/Header',
  component: Header,
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    selectTelescope: true,
    testId: 'testId',
    toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
    themeToggle: handleThemeToggle,
  },
};
