import React from 'react';
import { EntryField, STATE, TYPE } from '../EntryField/EntryField';

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
  validationState?: STATE;
}

export function DateEntry({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  required,
  validationState,
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
      validationState={validationState}
    />
  );
}

//type="password"
//autoComplete="current-password"

DateEntry.defaultProps = {
  disabled: false,
  errorText: '',
  helperText: '',
  password: false,
  required: false,
  setValue: null,
  validationState: STATE.NONE,
};

export default DateEntry;
