import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SKAOAlert from './Alert';

export default {
  title: 'Example/Alert',
  component: SKAOAlert,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SKAOAlert>;

const Template: ComponentStory<typeof SKAOAlert> = (args) => <SKAOAlert {...args} />;

export const Component = Template.bind({});

Component.parameters = {
  backgrounds: { default: 'light' },
};

Component.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  filled: false,
  severity: 0,
};
