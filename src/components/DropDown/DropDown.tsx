import React from 'react';
import { MenuItem, TextField } from '@mui/material';

export interface DropDownProps {
  // required
  options: { label: string; value: string | number }[];
  value: string | number;
  // optional
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  label: string;
  required: boolean;
  setValue?: Function;
}

export function DropDown({
  disabled,
  errorText,
  helperText,
  label,
  options,
  required,
  setValue,
  value,
}: DropDownProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'undefined' ? setValue(e) : null);

  return (
    <TextField
      color="secondary"
      disabled={disabled}
      error={errorText && errorText.length > 0}
      fullWidth
      helperText={errorText ? errorText : helperText ? helperText : ''}
      id={'dropDown' + label + 'Id'}
      label={label}
      name={'dropDown' + label}
      onChange={(e: { target: { value: string | number } }) => {
        updateValue(e.target.value);
      }}
      required={required}
      select
      value={value}
      variant="outlined"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

DropDown.defaultProps = {
  disabled: false,
  errorText: '',
  helperText: '',
  label: '',
  required: false,
  setValue: null,
};

export default DropDown;
