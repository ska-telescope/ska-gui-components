import React from 'react';
import { MenuItem } from '@mui/material';
import EntryField, { ENTRY_LABEL_POSITION } from '../EntryField/EntryField';

export interface DropDownProps {
  // required
  options: { label: string; value: string | number }[];
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  label: string;
  labelPosition?: ENTRY_LABEL_POSITION;
  labelWidth?: number;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
}

export function DropDown({
  ariaDescription = 'Selection of a value from a list of possible values',
  ariaTitle = 'DropDown',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition,
  labelWidth,
  onFocus,
  options,
  required = false,
  setValue,
  testId,
  value,
}: DropDownProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      onFocus={onFocus}
      value={value}
      required={required}
      testId={testId}
      select
      setValue={(e: { target: { value: string | number } }) => {
        updateValue(e);
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </EntryField>
  );
}

export default DropDown;
