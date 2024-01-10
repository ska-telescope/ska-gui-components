import { ColorTypes } from '../../models/colorTypes';
import { InputTypes } from '../../models/inputTypes';
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
    color: ColorTypes.Secondary,
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
    type: InputTypes.Date,
    value: '',
    setValue: undefined,
    sx: {}
  },
};
