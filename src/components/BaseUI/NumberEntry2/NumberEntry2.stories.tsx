import React from 'react';
import NumberEntry2 from './NumberEntry2';

export default {
  title: 'Example/NumberEntry2',
  component: NumberEntry2,
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
