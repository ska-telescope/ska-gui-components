export declare enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}
export interface SearchEntryProps {
  label: string;
  testId?: string;
  value: string | number;
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  onFocus?: Function;
  setValue?: Function;
  toolTip?: string;
}
export declare function SearchEntry({
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  helperText,
  label,
  onFocus,
  setValue,
  testId,
  toolTip,
  value,
}: SearchEntryProps): JSX.Element;
export default SearchEntry;
