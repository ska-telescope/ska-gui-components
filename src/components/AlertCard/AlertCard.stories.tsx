import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertCard from './AlertCard';

const DUMMY_DATA = [
  { level: 0, title: 'alertCard.0', filled: true, value: 1, hideValue: true },
  { level: 1, title: 'alertCard.1', filled: true, value: 1, hideValue: false },
  { level: 2, title: 'alertCard.2', filled: true, value: 1, hideValue: true },
  { level: 3, title: 'alertCard.3', filled: true, value: 1, hideValue: false },
  { level: 4, title: 'alertCard.4', filled: true, value: 1, hideValue: true },
  { level: 5, title: 'alertCard.5', filled: true, value: 1, hideValue: false },
  { level: 6, title: 'alertCard.6', filled: true, value: 1, hideValue: true },
  { level: 0, title: 'alertCard.0', filled: false, value: 1, hideValue: false },
  { level: 1, title: 'alertCard.1', filled: false, value: 1, hideValue: true },
  { level: 2, title: 'alertCard.2', filled: false, value: 1, hideValue: false },
  { level: 3, title: 'alertCard.3', filled: false, value: 1, hideValue: true },
  { level: 4, title: 'alertCard.4', filled: false, value: 1, hideValue: false },
  { level: 5, title: 'alertCard.5', filled: false, value: 1, hideValue: true },
  { level: 6, title: 'alertCard.6', filled: false, value: 1, hideValue: false },
];

export default {
  title: 'Example/AlertCard',
  component: AlertCard,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof AlertCard>;

const Template: ComponentStory<typeof AlertCard> = (args) => <AlertCard {...args} />;

export const Component = Template.bind({});

Component.parameters = {
  backgrounds: { default: 'light' },
};

Component.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  title: 'alertCard.title',
  filled: false,
  array: DUMMY_DATA,
};
