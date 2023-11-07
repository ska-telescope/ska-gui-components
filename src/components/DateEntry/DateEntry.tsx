import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface DateEntryProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  setValue?: Function;
}

export function DateEntry({
  ariaDescription = 'Entry of a valid date',
  ariaTitle = 'DateEntry',
  disabled = false,
  errorText = '',
  label,
  helperText = '',
  required,
  setValue,
  testId,
  value,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      setValue={setValue}
      testId={testId}
      type={TYPE.DATE}
      value={value}
    />
  );
}

export default DateEntry;
