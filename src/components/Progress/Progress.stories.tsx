import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progress, { ProgressIndicator } from './Progress';

export default {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  return <Progress {...args} />;
};

export const ProgressDisplay = Template.bind({});

ProgressDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  determinate: false,
  indicator: ProgressIndicator.Circle,
  label: false,
  testId: 'testId',
  value: 0,
};
