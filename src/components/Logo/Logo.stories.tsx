import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: typeof Logo,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    dark: false,
    flatten: false,
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    dark: true,
    flatten: false,
  },
};
