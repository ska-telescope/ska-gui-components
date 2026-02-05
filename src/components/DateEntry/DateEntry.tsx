/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { FocusEventHandler, JSX } from 'react';
import { EntryField, LABEL_POSITION, TYPE } from '../EntryField/EntryField';

export interface DateEntryProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  disabledUnderline?: boolean;
  errorText?: string;
  helperText?: string;
  height?: number;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
  toolTip?: string;
  toolTipPlacement?: string;
}

export function DateEntry({
  ariaDescription = 'Entry of a valid date',
  ariaTitle = 'DateEntry',
  disabled = false,
  disabledUnderline = false,
  errorText = '',
  helperText = '',
  height = 45,
  inputRef,
  label,
  labelBold = false,
  labelPosition,
  labelWidth,
  name = '',
  onBlur,
  onFocus,
  required,
  setValue,
  testId,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
}: DateEntryProps): JSX.Element {
  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      data-testid={testId}
      disabled={disabled}
      disabledUnderline={disabledUnderline}
      errorText={errorText}
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
      required={required}
      setValue={setValue}
      testId={testId}
      type={TYPE.DATE}
      toolTip={toolTip}
      toolTipPlacement={toolTipPlacement}
      value={value}
    />
  );
}

export default DateEntry;
