import React, { FocusEventHandler, JSX } from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField';

export interface TextEntryProps {
  // required
  label: string;
  value: string;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  password?: boolean;
  prefix?: JSX.Element | string;
  required?: boolean | string;
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId?: string;
  toolTip?: string;
  toolTipPlacement?: string;
}

export function TextEntry({
  ariaDescription = 'Entry of a textual value',
  ariaTitle = 'TextEntry',
  disabled = false,
  errorText = '',
  height,
  helperText = '',
  inputRef,
  label,
  labelBold = false,
  labelPosition,
  labelWidth,
  name = '',
  onBlur,
  onFocus,
  password = false,
  prefix = '',
  required = false,
  rows = 1,
  setValue,
  suffix = '',
  testId = 'textEntry-' + label,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
}: TextEntryProps): JSX.Element {
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
  const errText = () => {
    if (isRequired()) {
      if (!value || value.length === 0) {
        return typeof required === 'string' && required.length > 0
          ? required
          : 'A value is required';
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
      height={height}
      helperText={helperText}
      inputRef={inputRef}
      label={label}
      labelBold={labelBold}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      name={name}
      onBlur={onBlur as FocusEventHandler}
      onFocus={onFocus as FocusEventHandler}
      prefix={prefix}
      rows={rows}
      value={value}
      required={isRequired()}
      testId={testId}
      type={password ? TYPE.PASSWORD : TYPE.TEXT}
      toolTip={toolTip}
      toolTipPlacement={toolTipPlacement}
      setValue={setValue}
      suffix={suffix}
    />
  );
}

export default TextEntry;
