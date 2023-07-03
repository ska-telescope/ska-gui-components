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

const Template: ComponentStory<typeof TextEntry> = (args) => <TextEntry {...args} />;

export const TextEntryDisplay = Template.bind({});

TextEntryDisplay.args = {
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  password: false,
  prefix: '',
  required: false,
  suffix: '',
  value: 'Value',
};
