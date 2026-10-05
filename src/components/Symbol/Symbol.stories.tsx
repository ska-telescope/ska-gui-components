import { Symbol } from './Symbol';

export default {
  title: 'Example/Symbol',
  component: Symbol,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    dark: true,
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
