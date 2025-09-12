import { StatusIcon } from './StatusIcon';

export default {
  title: 'Example/StatusIcon',
  component: StatusIcon,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    testId: 'StatusIconTestId',
    icon: true,
    noBorder: true,
    softColors: true,
    level: 1,
  },
};
