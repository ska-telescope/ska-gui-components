import NumberEntry from './NumberEntry';

export default {
  title: 'Example/NumberEntry',
  component: NumberEntry,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    disabled: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    password: false,
    prefix: '',
    onFocus: undefined,
    required: false,
    suffix: '',
    value: 0,
    setValue: undefined,
  },
};
