import { ColorTypes } from '../../models/colorTypes';
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
    color: ColorTypes.Secondary,
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
    sx: {}
  },
};
