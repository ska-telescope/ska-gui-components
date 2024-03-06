import { ENTRY_LABEL_POSITION } from '../EntryField/EntryField';
import { TextEntry } from './TextEntry';

export default {
  title: 'Example/TextEntry',
  component: TextEntry,
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
    password: false,
    prefix: undefined,
    onFocus: undefined,
    required: false,
    suffix: '',
    testId: 'testId',
    value: '',
    setValue: undefined,
  },
};
