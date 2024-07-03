import { LABEL_POSITION } from '../EntryField/EntryField';
import { TextEntry } from './TextEntry';
declare const _default: {
  title: string;
  component: typeof TextEntry;
  parameters: {
    layout: string;
  };
};
export default _default;
export declare const Default: {
  args: {
    ariaTitle: string;
    ariaDescription: string;
    disabled: boolean;
    errorText: string;
    helperText: string;
    label: string;
    labelPosition: LABEL_POSITION;
    labelWidth: number;
    password: boolean;
    prefix: undefined;
    onFocus: undefined;
    required: boolean;
    suffix: string;
    testId: string;
    value: string;
    setValue: undefined;
  };
};
