import React from 'react';
import { InputAdornment, TextField } from '@mui/material';

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export enum TYPE {
  DATE = 'date',
  NUMBER = 'number',
  TEXT = 'text',
}

export interface EntryFieldProps {
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
  rows?: number;
  setValue?: Function;
  suffix?: string;
  type?: TYPE.DATE | TYPE.NUMBER | TYPE.TEXT;
}

export function EntryField({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  prefix,
  required,
  rows,
  suffix,
  type,
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ? suffix : '';
  const thePrefix = prefix ? prefix : '';
  const updateValue = (e: any) => (typeof setValue !== 'undefined' ? setValue(e) : null);

  return (
    <TextField
      id={'textField' + label + 'Id'}
      disabled={disabled}
      error={errorText && errorText.length > 0}
      fullWidth
      helperText={errorText ? errorText : helperText ? helperText : ''}
      InputProps={{
        startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
      }}
      label={label}
      margin="normal"
      minRows="1"
      maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
      multiline={type === TYPE.TEXT && rows && rows > 1}
      name={'textField' + label}
      onChange={(e: { target: { value: any } }) => {
        updateValue(e.target.value);
      }}
      value={value}
      variant="outlined"
      required={required}
      type={type}
    />
  );
}

EntryField.defaultProps = {
  disabled: false,
  helperText: '',
  password: false,
  prefix: '',
  required: false,
  rows: 1,
  setValue: null,
  suffix: '',
  type: TYPE.TEXT,
};
