import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ButtonToggle from './ButtonToggle';

export default {
  title: 'Example/ButtonToggle',
  component: ButtonToggle,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof ButtonToggle>;

const telescope = { id: 'low', Label: 'SKA LOW' };
const telescopeList = [
  { id: 'low', label: 'SKA LOW', value: 'low' },
  { id: 'mid', label: 'SKA MID', value: 'mid' },
];

const Template: StoryFn<typeof ButtonToggle> = (args) => {
  return <ButtonToggle {...args} />;
};

export const ButtonToggleDisplay = Template.bind({});

ButtonToggleDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  color: 'telescope',
  current: telescope.id,
  value: telescope,
  options: telescopeList,
  toolTip: 'Tool tip',
};
