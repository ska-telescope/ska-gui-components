import React from 'react';
import { EntryField, STATE, TYPE } from '../EntryField/EntryField';

export interface TimeEntryProps {
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

export function TimeEntry({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  required,
  validationState,
}: TimeEntryProps): JSX.Element {
  // TODO : const onChange = (e: any) => ( typeof setValue === 'function' ? setValue(e) : null );
  const updateValue = (e: any) => 1 === 1;

  return (
    <EntryField
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      //onChange={(e: { target: { value: any } }) => {
      //  updateValue(e.target.value);
      //}}
      required={required}
      value={value}
      type={TYPE.TIME}
      validationState={validationState}
    />
  );
}

//type="password"
//autoComplete="current-password"

TimeEntry.defaultProps = {
  disabled: false,
  errorText: '',
  helperText: '',
  password: false,
  required: false,
  setValue: null,
  validationState: STATE.NONE,
};

export default TimeEntry;
