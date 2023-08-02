import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonToggle from './ButtonToggle';

export default {
  title: 'Example/ButtonToggle',
  component: ButtonToggle,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof ButtonToggle>;

const telescope = { id: 'low', Label: 'SKA LOW' };
const telescopeList = [
  { id: 'low', label: 'SKA LOW', value: null },
  { id: 'mid', label: 'SKA MID', value: null },
];

const Template: ComponentStory<typeof ButtonToggle> = (args) => {
  return <ButtonToggle {...args} />;
};

export const ButtonToggleDisplay = Template.bind({});

ButtonToggleDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  current: telescope.id,
  value: telescope,
  options: telescopeList,
  toolTip: 'Tool tip',
};
