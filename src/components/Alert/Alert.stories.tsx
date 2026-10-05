import { SKAOAlert, AlertVariantTypes, AlertColorTypes } from './Alert';

export default {
  title: 'Example/Alert',
  component: SKAOAlert,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  globals: {
    backgrounds: { value: 'light' },
  },
  args: {
    ariaDescription: 'aria Description',
    ariaTitle: 'aria Title',
    children: 'CHILDREN defined are displayed in here',
    color: AlertColorTypes.Success,
    variant: AlertVariantTypes.Outlined,
    showIcon: false,
    testId: 'alertTestId',
  },
};

export const Dark = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    ariaDescription: 'aria Description',
    ariaTitle: 'aria Title',
    children: 'CHILDREN defined are displayed in here',
    color: AlertColorTypes.Success,
    variant: AlertVariantTypes.Filled,
    showIcon: false,
    testId: 'alertTestId',
  },
};
