import { LABEL_POSITION } from '../EntryField/EntryField';
import NumberEntry2 from './NumberEntry2';

export default {
  title: 'Example/NumberEntry2',
  component: NumberEntry2,
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
    prompt: 'Prompt',
    icon: 'classic',
    labelWidth: 4,
    minValue: 0,
    maxValue: 2,
    step: 0.1,
    password: false,
    prefix: '!',
    onFocus: undefined,
    required: false,
    suffix: '?',
    title: 'Label',
    value: 1,
    setValue: undefined,
    width: 300,
  },
};
