import EntryField, { POSITION } from './EntryField';

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
    labelPosition: POSITION.CONTAINED,
    labelWidth: 4,
    prefix: '',
    onFocus: undefined,
    required: false,
    testId: 'testId',
    suffix: '',
    value: 'Value',
  },
};
