import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DateEntry from './DateEntry';

export default {
  title: 'Example/DateEntry',
  component: DateEntry,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof DateEntry>;

const Template: ComponentStory<typeof DateEntry> = (args) => {
  return <DateEntry {...args} />;
};

export const DateEntryDisplay = Template.bind({});

DateEntryDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  required: false,
  testId: 'testId',
  value: '',
};
