import { ColorTypes, Variants } from '../../models';
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
    color: ColorTypes.Secondary,
    disabled: false,
    errorText: '',
    helperText: 'HELPER TEXT',
    label: 'LABEL',
    margin: 'normal',
    onFocus: undefined,
    testId: 'testId',
    value: '',
    variant: Variants.Standard,
    setValue: undefined,
  },
};
