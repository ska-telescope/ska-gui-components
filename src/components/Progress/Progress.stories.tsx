import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Progress, { ProgressIndicator } from './Progress';

export default {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Progress>;

const Template: StoryFn<typeof Progress> = (args) => {
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
