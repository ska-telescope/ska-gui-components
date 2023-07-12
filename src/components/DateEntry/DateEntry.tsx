import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface DateEntryProps {
  // required
  label: string;
  value: string | number;
  // optional
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  setValue?: Function;
}

export function DateEntry({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  required,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
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
  disabled: false,
  errorText: '',
  helperText: '',
  password: false,
  required: false,
  setValue: null,
};

export default DateEntry;
