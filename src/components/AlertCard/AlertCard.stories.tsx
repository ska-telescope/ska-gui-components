import { AlertColorTypes, AlertVariantTypes } from '../Alert/Alert';
import AlertCard from './AlertCard';

const DUMMY_DATA = [
  {
    color: AlertColorTypes.Success,
    title: 'SUCCESS',
    variant: AlertVariantTypes.Filled,
    value: 0,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Info,
    title: 'INFO',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Warning,
    title: 'WARNING',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Error,
    title: 'ERROR',
    variant: AlertVariantTypes.Filled,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Success,
    title: 'SUCCESS',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Info,
    title: 'INFO',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: false,
  },
  {
    color: AlertColorTypes.Warning,
    title: 'WARNING',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: true,
  },
  {
    color: AlertColorTypes.Error,
    title: 'ERROR',
    variant: AlertVariantTypes.Outlined,
    value: 1,
    hideValue: false,
  },
];

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
    array: DUMMY_DATA,
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
    array: DUMMY_DATA,
    title: 'Title',
    variant: AlertVariantTypes.Filled,
  },
};
