import Header from './Header';

function handleThemeToggle() {}

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    testId: 'testId',
    toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
    themeToggle: handleThemeToggle,
  },
};
