import { LABEL_POSITION } from '../EntryField/EntryField';
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
    disabledUnderline: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    labelPosition: LABEL_POSITION.CONTAINED,
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
