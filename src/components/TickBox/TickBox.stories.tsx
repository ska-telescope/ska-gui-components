import { TickBox } from './TickBox';
import SearchIcon from '@mui/icons-material/Search';

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
    labelEnd: true,
    onFocus: undefined,
    required: false,
    testId: 'testId',
  },
};
