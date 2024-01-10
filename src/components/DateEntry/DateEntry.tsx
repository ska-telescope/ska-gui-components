import React from 'react';
import { EntryField } from '../EntryField/EntryField';
import { InputTypes, ColorTypes, Variants } from '../../models';

export interface DateEntryProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  color?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
  sx?: object;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
}

export function DateEntry({
  ariaDescription = 'Entry of a valid date',
  ariaTitle = 'DateEntry',
  color = ColorTypes.Secondary,
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  onFocus,
  required,
  setValue,
  testId,
  value,
  sx = {},
  variant = Variants.Standard,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      color={color}
      data-testid={testId}
      disabled={disabled}
      errorText={errorText}
      helperText={helperText}
      label={label}
      onFocus={onFocus}
      required={required}
      setValue={setValue}
      testId={testId}
      type={InputTypes.Date}
      value={value}
      sx={sx}
      variant={variant}
    />
  );
}

export default DateEntry;
