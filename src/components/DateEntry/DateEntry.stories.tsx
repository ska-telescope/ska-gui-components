import { ENTRY_LABEL_POSITION } from '../EntryField/EntryField';
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
    labelPosition: ENTRY_LABEL_POSITION.CONTAINED,
    labelWidth: 4,
    onFocus: undefined,
    required: false,
    testId: 'testId',
    value: '',
  },
};
