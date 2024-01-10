import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { ColorTypes } from '../../models/colorTypes';
import { Variants } from '../../models';

export interface DropDownProps {
  // required
  options: { label: string; value: string | number }[];
  testId: string;
  value: string | number;
  // optional
  color?: string;
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  label: string;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
  sx?: object;
}

export function DropDown({
  ariaDescription = 'Selection of a value from a list of possible values',
  ariaTitle = 'DropDown',
  color = ColorTypes.Primary,
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  onFocus,
  options,
  required = false,
  setValue,
  testId,
  value,
  variant = Variants.Standard,
  sx = {}
}: DropDownProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <TextField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      color={color}
      data-testid={testId}
      disabled={disabled}
      error={errorText && errorText.length > 0 ? true : false}
      fullWidth
      helperText={errorText ? errorText : helperText ? helperText : ''}
      id={'dropDown' + label + 'Id'}
      label={label}
      name={'dropDown' + label}
      onChange={(e: { target: { value: string | number } }) => {
        updateValue(e.target.value);
      }}
      onFocus={onFocus}
      required={required}
      select
      value={value}
      variant={variant}
      sx={sx}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default DropDown;
