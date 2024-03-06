import { TICK_BOX_LABEL_POSITION, TickBox } from './TickBox';

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
    labelPosition: TICK_BOX_LABEL_POSITION.START,
    onFocus: undefined,
    required: false,
    testId: 'testId',
  },
};
