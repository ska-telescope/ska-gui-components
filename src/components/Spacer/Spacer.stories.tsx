import { Spacer, SPACER_VERTICAL } from './Spacer';

export default {
  title: 'Example/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    size: 90,
    axis: SPACER_VERTICAL,
  },
};
