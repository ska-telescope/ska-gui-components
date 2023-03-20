import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertCard from './AlertCard';

const mockArray = [
  { level: 1, title: 'Errors', value: 1, hideValue: false },
  { level: 3, title: 'Warnings', value: 0, hideValue: false },
  { level: 5, title: 'Offline', value: 0, hideValue: false },
  { level: 0, title: 'Ok', value: 55, hideValue: false },
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

AlertCardDisplay.parameters = {
  backgrounds: { default: 'light' },
};

AlertCardDisplay.args = {
  title: 'title',
  filled: false,
  array: mockArray,
};
