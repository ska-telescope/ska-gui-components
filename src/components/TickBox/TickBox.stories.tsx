import { LABEL_POSITION } from '../EntryField/EntryField';
import { TickBox } from './TickBox';

export default {
  title: 'Example/TickBox',
  component: TickBox,
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
    label: 'Label',
    labelBold: false,
    labelPosition: LABEL_POSITION.START,
    labelWidth: 8,
    prefix: '',
    onFocus: undefined,
    required: false,
    testId: 'testId',
    suffix: '',
    value: 'Value',
  },
};
