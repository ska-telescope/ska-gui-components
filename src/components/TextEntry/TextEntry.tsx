import React from 'react';
import { EntryField } from '../EntryField/EntryField';
import { ColorTypes } from '../../models/colorTypes';
import { InputTypes, Variants } from '../../models';

export interface TextEntryProps {
  // required
  label: string;
  value: string;
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
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
  sx?: object;
}

export function TextEntry({
  ariaDescription = 'Entry of a textual value',
  ariaTitle = 'TextEntry',
  color = ColorTypes.Secondary,
  disabled = false,
  errorText = '',
  helperText = '',
  password = false,
  label,
  onFocus,
  required = false,
  rows = 1,
  setValue,
  testId,
  value,
  sx = {},
  variant = Variants.Standard
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
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      color={color}
      data-testid={testId}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      onFocus={onFocus}
      rows={rows}
      value={value}
      required={required}
      testId={testId}
      type={password ? InputTypes.Password : InputTypes.Text}
      setValue={setValue}
      sx={sx}
    />
  );
}

export default TextEntry;
