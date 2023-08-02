import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface NumberEntryProps {
  // required
  label: string;
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
  setValue?: Function;
  suffix?: string;
  testId: string;
}

export function NumberEntry({
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  helperText,
  label,
  prefix,
  required,
  setValue,
  suffix,
  testId,
  value,
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
      aria-description={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      prefix={prefix}
      value={value}
      required={required}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      type={TYPE.NUMBER}
    />
  );
}

//type="password"
//autoComplete="current-password"

NumberEntry.defaultProps = {
  ariaDescription: 'Entry of a valid numeric value',
  ariaTitle: 'NumberEntry',
  disabled: false,
  helperText: '',
  password: false,
  prefix: '',
  required: false,
  rows: 1,
  setValue: null,
  suffix: '',
};

export default NumberEntry;
