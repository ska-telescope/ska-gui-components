import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EntryField } from './EntryField';

export default {
  title: 'Example/EntryField',
  component: EntryField,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof EntryField>;

const Template: ComponentStory<typeof EntryField> = (args) => <EntryField {...args} />;

export const EntryFieldDisplay = Template.bind({});

EntryFieldDisplay.args = {
  disabled: false,
  errorText: '',
  helperText: 'HELPER TEXT',
  label: 'LABEL',
  prefix: '',
  required: false,
  suffix: '',
  value: 'Value',
};
