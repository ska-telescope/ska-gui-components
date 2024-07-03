import { LABEL_POSITION } from '../EntryField/EntryField';
export interface NumberEntryProps {
  label: string;
  value: number | string;
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  name?: string;
  onFocus?: Function;
  prefix?: JSX.Element | string;
  required?: boolean | string;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
}
export declare function NumberEntry({
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  height,
  helperText,
  inputRef,
  label,
  labelBold,
  labelPosition,
  labelWidth,
  name,
  onFocus,
  prefix,
  required,
  setValue,
  suffix,
  testId,
  value,
}: NumberEntryProps): JSX.Element;
export default NumberEntry;
