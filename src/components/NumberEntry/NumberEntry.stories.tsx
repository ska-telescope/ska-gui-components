import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberEntry from './NumberEntry';

export default {
  title: 'Example/NumberEntry',
  component: NumberEntry,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof NumberEntry>;

const Template: ComponentStory<typeof NumberEntry> = (args) => {
  return <NumberEntry {...args} />;
};

export const NumberEntryDisplay = Template.bind({});

NumberEntryDisplay.args = {
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  password: false,
  prefix: '',
  required: false,
  suffix: '',
  value: 0,
  setValue: undefined,
};
