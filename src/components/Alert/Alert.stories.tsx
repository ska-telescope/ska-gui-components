import { SKAOAlert, AlertVariantTypes } from './Alert';

export default {
  title: 'Example/Alert',
  component: SKAOAlert,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    children: 'CHILDREN defined are displayed in here',
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    children: 'CHILDREN defined are displayed in here',
    variant: AlertVariantTypes.Filled,
  },
};
