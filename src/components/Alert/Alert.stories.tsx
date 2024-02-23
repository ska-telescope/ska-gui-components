import { SKAOAlert, AlertVariantTypes, AlertColorTypes } from './Alert';

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
    ariaDescription: 'aria Description',
    ariaTitle: 'aria Title',
    children: 'CHILDREN defined are displayed in here',
    color: AlertColorTypes.Success,
    variant: AlertVariantTypes.Outlined,
    testId: 'alertTestId',
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaDescription: 'aria Description',
    ariaTitle: 'aria Title',
    children: 'CHILDREN defined are displayed in here',
    color: AlertColorTypes.Success,
    variant: AlertVariantTypes.Filled,
    testId: 'alertTestId',
  },
};
