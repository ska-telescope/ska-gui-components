import EntryField from './EntryField';

function handleThemeToggle() {}

export default {
  title: 'Example/EntryField',
  component: EntryField,
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
    prefix: '',
    required: false,
    testId: 'testId',
    suffix: '',
    value: 'Value',
  },
};
