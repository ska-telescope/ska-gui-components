import EntryField, { LABEL_POSITION } from './EntryField';

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
    label: 'Label',
    labelBold: true,
    labelPosition: LABEL_POSITION.START,
    labelWidth: 4,
    prefix: '',
    onFocus: undefined,
    required: false,
    testId: 'testId',
    suffix: '',
    value: 'Value',
  },
};
