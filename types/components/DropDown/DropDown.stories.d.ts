import { LABEL_POSITION } from '../EntryField/EntryField';
import DropDown from './DropDown';
declare const _default: {
  title: string;
  component: typeof DropDown;
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
    helperText: string;
    errorText: string;
    label: string;
    labelBold: boolean;
    labelPosition: LABEL_POSITION;
    labelWidth: number;
    options: {
      label: string;
      value: string;
    }[];
    required: boolean;
    value: string;
    setValue: undefined;
    testId: string;
  };
};
