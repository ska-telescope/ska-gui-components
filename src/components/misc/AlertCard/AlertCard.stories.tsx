import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertCard from './AlertCard';

const DUMMY_DATA = [
  { level: 0, title: 'alertCard.0', value: 1, hideValue: true },
  { level: 1, title: 'alertCard.1', value: 1, hideValue: true },
  { level: 2, title: 'alertCard.2', value: 1, hideValue: true },
  { level: 3, title: 'alertCard.3', value: 1, hideValue: true },
  { level: 4, title: 'alertCard.4', value: 1, hideValue: true },
  { level: 5, title: 'alertCard.5', value: 1, hideValue: true },
  { level: 6, title: 'alertCard.6', value: 1, hideValue: true },
];

export default {
  title: 'Example/AlertCard',
  component: AlertCard,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof AlertCard>;

const Template: ComponentStory<typeof AlertCard> = (args) => <AlertCard {...args} />;

export const AlertCardDisplay = Template.bind({});

AlertCardDisplay.args = {
  title: 'alertCard.title',
  filled: false,
  array: DUMMY_DATA,
};
