import React from 'react';
import { EntryField, ENTRY_LABEL_POSITION, TYPE } from '../EntryField/EntryField';

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
  labelPosition?: ENTRY_LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  onFocus?: Function;
  prefix?: JSX.Element | string;
  required?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
}

export function NumberEntry({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition,
  labelWidth,
  onFocus,
  prefix = '',
  required = false,
  setValue,
  suffix = '',
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
      data-testid={testId}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      prefix={prefix}
      onFocus={onFocus}
      value={value}
      required={required}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      type={TYPE.NUMBER}
    />
  );
}

export default NumberEntry;
