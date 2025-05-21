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
  { label: '1', value: '1' },
  { label: '2 Which is really, really long', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
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
    value: '3',
    setValue: undefined,
    testId: 'testId',
    toolTip: 'tooltip',
  },
};
