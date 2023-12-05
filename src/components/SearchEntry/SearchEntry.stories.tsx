import { SearchEntry } from './SearchEntry';

export default {
  title: 'Example/SearchEntry',
  component: SearchEntry,
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
    onFocus: undefined,
    testId: 'testId',
    value: '',
    setValue: undefined,
  },
};
