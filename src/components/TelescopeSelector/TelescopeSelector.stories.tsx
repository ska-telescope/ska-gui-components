import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TelescopeSelector from './TelescopeSelector';
import { TELESCOPE_LOW } from '@ska-telescope/ska-javascript-components';

export default {
  title: 'Example/TelescopeSelector',
  component: TelescopeSelector,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TelescopeSelector>;

const telescope = TELESCOPE_LOW;

const Template: ComponentStory<typeof TelescopeSelector> = (args) => {
  return <TelescopeSelector {...args} />;
};

export const TelescopeSelectorDisplay = Template.bind({});

TelescopeSelectorDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  current: telescope.code,
  value: telescope,
  toolTip: 'Tool tip',
};
