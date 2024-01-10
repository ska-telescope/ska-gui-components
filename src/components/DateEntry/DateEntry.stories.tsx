import { ColorTypes, Variants } from '../../models';
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
    color: ColorTypes.Secondary,
    disabled: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    onFocus: undefined,
    required: false,
    testId: 'testId',
    value: '',
    sx: {},
    variant: Variants.Standard
  },
};
