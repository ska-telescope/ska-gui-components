import React from 'react';
import { EntryField, STATE, TYPE } from '../EntryField/EntryField';

export interface NumberEntryProps {
  // required
  label: string;
  value: string | number;
  // optional
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: string;
  required?: boolean;
  setValue?: Function;
  suffix?: string;
  validationState?: STATE;
}

export function NumberEntry({
  label,
  value,
  helperText,
  disabled,
  errorText,
  required,
  prefix,
  setValue,
  suffix,
  validationState,
}: NumberEntryProps): JSX.Element {
  const errText = () => {
    if (required && typeof value !== 'number') {
      errorText = 'entryField.required';
    }
    return errorText;
  };

  return (
    <EntryField
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      prefix={prefix}
      value={value}
      required={required}
      setValue={setValue}
      suffix={suffix}
      type={TYPE.NUMBER}
      validationState={validationState}
    />
  );
}

//type="password"
//autoComplete="current-password"

NumberEntry.defaultProps = {
  disabled: false,
  helperText: '',
  password: false,
  prefix: '',
  required: false,
  rows: 1,
  setValue: null,
  suffix: '',
  validationState: 'none',
};

export default NumberEntry;
