import { Status } from './Status';

export default {
  title: 'Example/Status',
  component: Status,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    testId: 'statusTestId',
    noBorder: false,
    softColors: false,
    level: 1,
  },
};
