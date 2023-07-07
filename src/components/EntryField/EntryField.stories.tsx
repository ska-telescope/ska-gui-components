import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EntryField } from './EntryField';
import Box from '@mui/material/Box';

export default {
  title: 'Example/EntryField',
  component: EntryField,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof EntryField>;

const Template: ComponentStory<typeof EntryField> = (args) => { 
  return (
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <EntryField {...args} />
    </Box>)
}

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
