import React from 'react';
import { EntryField, STATE, TYPE } from '../EntryField/EntryField';

export interface TextEntryProps {
  // required
  label: string;
  value: string;
  // optional
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: string;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: string;
  validationState?: STATE;
}

export function TextEntry({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  required,
  rows,
  validationState,
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
    <>
      <EntryField
        disabled={disabled}
        errorText={errText()}
        helperText={helperText}
        label={label}
        rows={rows}
        value={value}
        required={required}
        type={TYPE.TEXT}
        setValue={setValue}
        validationState={validationState}
      />
    </>
  );
}

//type="password"
//autoComplete="current-password"

TextEntry.defaultProps = {
  disabled: false,
  error: false,
  helperText: '',
  password: false,
  required: false,
  rows: 1,
  setValue: null,
  type: 'text',
  validationState: 'none',
};

export default TextEntry;
