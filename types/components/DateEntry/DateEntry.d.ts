import { LABEL_POSITION } from '../EntryField/EntryField';
export interface DateEntryProps {
  label: string;
  testId: string;
  value: string | number;
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  height?: number;
  inputRef?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
}
export declare function DateEntry({
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  helperText,
  height,
  inputRef,
  label,
  labelBold,
  labelPosition,
  labelWidth,
  name,
  onBlur,
  onFocus,
  required,
  setValue,
  testId,
  value,
}: DateEntryProps): JSX.Element;
export default DateEntry;
