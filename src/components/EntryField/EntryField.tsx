import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { ColorTypes, InputTypes, Variants } from '../../models';

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export interface EntryFieldProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  color?: string;
  defaultValue?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  margin?: string;
  password?: boolean;
  prefix?: JSX.Element | string;
  onFocus?: Function;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  type?: InputTypes.Date | InputTypes.Number | InputTypes.Password | InputTypes.Text | InputTypes.File;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
  sx?: object;
}

export function EntryField({
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  color = ColorTypes.Secondary,
  defaultValue = '',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  margin = 'normal',
  onFocus,
  prefix = '',
  required = false,
  rows = 1,
  setValue,
  suffix = '',
  testId,
  type = InputTypes.Text,
  value,
  variant = Variants.Standard,
  sx = {}
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ?? '';
  const thePrefix = prefix ??'';
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <TextField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-hidden={false}
      color={color}
      data-testid={testId}
      defaultValue={defaultValue ?? value}
      disabled={disabled}
      error={errorText?.length > 0 ? true : false}
      onFocus={onFocus}
      fullWidth
      helperText={errorText ?? helperText ?? ''}
      InputProps={{
        startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
      }}
      label={label}
      margin={margin}
      minRows={type !== InputTypes.Text || !rows ? 1 : rows}
      maxRows={type !== InputTypes.Text || !rows ? 1 : rows}
      multiline={type === InputTypes.Text && rows && rows > 1}
      name={'textField' + label}
      onChange={(e: { target: { value: any } }) => {
        updateValue(e.target.value);
      }}
      value={value}
      variant={variant}
      required={required}
      type={type}
      sx={sx}
    />
  );
}

export default EntryField;
