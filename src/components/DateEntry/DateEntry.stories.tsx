import DateEntry from './DateEntry';

export default {
  title: 'Example/DateEntry',
  component: DateEntry,
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
    required: false,
    testId: 'testId',
    value: '',
  },
};
