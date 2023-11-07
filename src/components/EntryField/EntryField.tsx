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
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
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
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  prefix = '',
  required = false,
  rows = 1,
  setValue,
  suffix = '',
  testId,
  type = TYPE.TEXT,
  value,
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ? suffix : '';
  const thePrefix = prefix ? prefix : '';
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <TextField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      error={errorText && errorText.length > 0 ? true : false}
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
      variant="standard"
      required={required}
      type={type}
    />
  );
}

export default EntryField;
