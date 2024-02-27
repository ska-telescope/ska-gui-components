import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface TextEntryProps {
  // required
  label: string;
  value: string;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: JSX.Element | string;
  onFocus?: Function;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
}

export function TextEntry({
  ariaDescription = 'Entry of a textual value',
  ariaTitle = 'TextEntry',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  password = false,
  onFocus,
  required = false,
  rows = 1,
  setValue,
  testId,
  value,
}: TextEntryProps): JSX.Element {
  const errText = () => {
    if (required) {
      if (!value || value.length === 0) {
        errorText = 'entryField.required';
      }
    }
    return errorText;
  };

  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      onFocus={onFocus}
      rows={rows}
      value={value}
      required={required}
      testId={testId}
      type={password ? TYPE.PASSWORD : TYPE.TEXT}
      setValue={setValue}
    />
  );
}

export default TextEntry;
