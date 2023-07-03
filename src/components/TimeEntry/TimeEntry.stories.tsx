import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimeEntry from './TimeEntry';

export default {
  title: 'Example/TimeEntry',
  component: TimeEntry,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TimeEntry>;

const Template: ComponentStory<typeof TimeEntry> = (args) => <TimeEntry {...args} />;

export const TimeEntryDisplay = Template.bind({});

TimeEntryDisplay.args = {
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  required: false,
  value: 'Value',
};
