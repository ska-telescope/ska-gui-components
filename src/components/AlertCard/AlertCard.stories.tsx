import { AlertVariantTypes } from '../Alert/Alert';
import AlertCard from './AlertCard';
import { ALERT_DATA } from './AlertData';

export default {
  title: 'Example/AlertCard',
  component: AlertCard,
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
    array: ALERT_DATA,
    title: 'Title',
    variant: AlertVariantTypes.Outlined,
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    array: ALERT_DATA,
    title: 'Title',
    variant: AlertVariantTypes.Filled,
  },
};
