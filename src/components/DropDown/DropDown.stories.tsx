import { LABEL_POSITION } from '../EntryField/EntryField';
import DropDown from './DropDown';

export default {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
};

const DUMMY_OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2 Which is really, really long', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    disabled: false,
    helperText: 'HELPER TEXT',
    errorText: '',
    label: 'Label',
    labelBold: false,
    labelPosition: LABEL_POSITION.START,
    labelWidth: 4,
    options: DUMMY_OPTIONS,
    required: false,
    value: '',
    setValue: undefined,
    testId: 'testId',
    toolTip: 'tooltip',
  },
};
