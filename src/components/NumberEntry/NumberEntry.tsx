import React from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField';

export interface NumberEntryProps {
  // required
  label: string;
  value: number | string;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  name?: string;
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
  height,
  helperText = '',
  inputRef = '',
  label,
  labelBold = false,
  labelPosition,
  labelWidth,
  name = '',
  onFocus,
  prefix = '',
  required = false,
  setValue,
  suffix = '',
  testId,
  value,
}: NumberEntryProps): JSX.Element {
  const isRequired = () => {
    if (!required) {
      return false;
    }
    if (typeof required === 'boolean') {
      return required;
    }
    if (typeof required === 'string') {
      return required.length > 0;
    }
    return false;
  };

  function isNumber(value?: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  const errText = () => {
    if (isRequired() && !isNumber(value)) {
      return typeof required === 'string' && required.length > 0
        ? required
        : 'A numeric value is required';
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
      height={height}
      inputRef={inputRef}
      label={label}
      labelBold={labelBold}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      name={name}
      onFocus={() => onFocus}
      prefix={prefix}
      value={value}
      required={isRequired()}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      type={TYPE.NUMBER}
    />
  );
}

export default NumberEntry;
