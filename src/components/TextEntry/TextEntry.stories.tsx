import { TextEntry } from './TextEntry';
import SearchIcon from '@mui/icons-material/Search';

export default {
  title: 'Example/TextEntry',
  component: TextEntry,
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
    label: 'LABEL',
    password: false,
    prefix: undefined,
    onFocus: undefined,
    required: false,
    suffix: '',
    testId: 'testId',
    value: '',
    setValue: undefined,
  },
};
