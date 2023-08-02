import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextEntry from './TextEntry';

export default {
  title: 'Example/TextEntry',
  component: TextEntry,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof TextEntry>;

const Template: ComponentStory<typeof TextEntry> = (args) => {
  return <TextEntry {...args} />;
};

export const TextEntryDisplay = Template.bind({});

TextEntryDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  password: false,
  prefix: '',
  required: false,
  suffix: '',
  testId: 'testId',
  value: '',
  setValue: undefined,
};
