import React from 'react';
import { EntryField, POSITION, TYPE } from '../EntryField/EntryField';

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
  labelPosition?: POSITION;
  labelWidth?: number;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
}

export function DateEntry({
  ariaDescription = 'Entry of a valid date',
  ariaTitle = 'DateEntry',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition,
  labelWidth,
  onFocus,
  required,
  setValue,
  testId,
  value,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      onFocus={onFocus}
      required={required}
      setValue={setValue}
      testId={testId}
      type={TYPE.DATE}
      value={value}
    />
  );
}

export default DateEntry;
