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
    label: 'LABEL',
    labelPosition: LABEL_POSITION.START,
    onFocus: undefined,
    required: false,
    testId: 'testId',
  },
};
