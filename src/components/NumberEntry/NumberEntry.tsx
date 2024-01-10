import React from 'react';
import { EntryField } from '../EntryField/EntryField';
import { ColorTypes } from '../../models/colorTypes';
import { InputTypes, Variants } from '../../models';

export interface NumberEntryProps {
  // required
  label: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  color?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: JSX.Element | string;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
  sx?: object;
}

export function NumberEntry({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  color = ColorTypes.Secondary,
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  prefix = '',
  onFocus,
  required = false,
  setValue,
  suffix = '',
  testId,
  value,
  sx = {}
}: NumberEntryProps): JSX.Element {
  const errText = () => {
    if (required && typeof value !== 'number') {
      errorText = 'entryField.required';
    }
    return errorText;
  };

  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      color={color}
      data-testid={testId}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      prefix={prefix}
      onFocus={onFocus}
      value={value}
      required={required}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      type={InputTypes.Number}
      sx={sx}
    />
  );
}

export default NumberEntry;
