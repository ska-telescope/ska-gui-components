import React, { FocusEventHandler } from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField.js';

export interface NumberEntryProps {
  // required
  label: string;
  value: number | string;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  disabledUnderline?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  prefix?: React.JSX.Element | string;
  required?: boolean | string;
  setValue?: Function;
  suffix?: React.JSX.Element | string;
  testId?: string;
  toolTip?: string;
  toolTipPlacement?: string;
  scroller?: boolean;
}

export function NumberEntry({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  disabled = false,
  disabledUnderline = false,
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
  prefix = '',
  required = false,
  setValue,
  suffix = '',
  testId = 'numberEntry-' + label,
  toolTip = '',
  toolTipPlacement = 'bottom',
  scroller = true,
  value,
}: NumberEntryProps): React.JSX.Element {
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
      disabledUnderline={disabledUnderline}
      errorText={errText()}
      helperText={helperText}
      height={height}
      inputRef={inputRef}
      label={label}
      labelBold={labelBold}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      name={name}
      onBlur={onBlur as FocusEventHandler}
      onFocus={onFocus as FocusEventHandler}
      prefix={prefix}
      value={value}
      required={isRequired()}
      setValue={setValue}
      suffix={suffix}
      testId={testId}
      toolTip={toolTip}
      toolTipPlacement={toolTipPlacement}
      type={TYPE.NUMBER}
      numScroller={scroller}
    />
  );
}

export default NumberEntry;
