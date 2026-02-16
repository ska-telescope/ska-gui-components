import React from 'react';
import { Typography } from '@mui/material';
import { LABEL_POSITION } from '../EntryField/EntryField';
import NumberField from './NumberField';

export default {
  title: 'Example/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    disabled: false,
    disabledUnderline: false,
    icon: true,
    errorText: '',
    helperText: 'HELPER TEXT',
    minValue: 0,
    maxValue: 2,
    plusMinus: false,
    prompt: '',
    step: 0.1,
    password: false,
    // prefix: '!',
    onFocus: undefined,
    required: false,
    // suffix: '?',
    title: 'Title',
    value: '123',
    setValue: undefined,
    width: 200,
  },
};
