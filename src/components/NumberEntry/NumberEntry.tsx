import React from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField';

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
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  onFocus?: Function;
  prefix?: JSX.Element | string;
  required?: boolean | string;
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
  labelBold = false,
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
    if (typeof required === 'boolean') {
      if (typeof value !== 'number') {
        errorText = 'A numeric value is required';
      }
    } else if (typeof required === 'string') {
      if (typeof value !== 'number') {
        return required;
      }
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
      labelBold={labelBold}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      prefix={prefix}
      onFocus={onFocus}
      value={value}
      required={typeof required === 'boolean' ? required : required.length > 0}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      type={TYPE.NUMBER}
    />
  );
}

export default NumberEntry;
