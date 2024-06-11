import React from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField';

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
  height?: number;
  inputRef?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
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
  height = 45,
  inputRef = '',
  label,
  labelBold = false,
  labelPosition,
  labelWidth,
  name = '',
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
      height={height}
      inputRef={inputRef}
      label={label}
      labelBold={labelBold}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      name={name}
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
