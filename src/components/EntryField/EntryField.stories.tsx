import { Variants } from '../../models';
import { ColorTypes } from '../../models/colorTypes';
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
    color: ColorTypes.Secondary,
    disabled: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    margin: 'normal',
    minRows: '1',
    prefix: '',
    onFocus: undefined,
    required: false,
    testId: 'testId',
    suffix: '',
    value: 'Value',
    sx: {},
    variant: Variants.Standard
  },
};
