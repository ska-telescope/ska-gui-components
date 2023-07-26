import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface DateEntryProps {
  // required
  label: string;
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
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  label,
  helperText,
  required,
  setValue,
  value,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testId={label + ariaTitle}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      required={required}
      setValue={setValue}
      type={TYPE.DATE}
      value={value}
    />
  );
}

DateEntry.defaultProps = {
  ariaDescription: 'Entry of a valid date',
  ariaTitle: 'DateEntry',
  disabled: false,
  errorText: '',
  helperText: '',
  password: false,
  required: false,
  setValue: null,
};

export default DateEntry;
