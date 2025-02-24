import { LABEL_POSITION } from '../EntryField/EntryField';
import NumberEntry2 from './NumberEntry';

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
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    labelPosition: LABEL_POSITION.CONTAINED,
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
