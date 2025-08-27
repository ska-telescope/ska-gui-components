import { LABEL_POSITION } from '../EntryField/EntryField';
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
    disabledUnderline: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    labelPosition: LABEL_POSITION.CONTAINED,
    numScroller: false,
    labelWidth: 4,
    password: false,
    prefix: '',
    onFocus: undefined,
    required: false,
    suffix: '',
    value: '',
    setValue: undefined,
  },
};
