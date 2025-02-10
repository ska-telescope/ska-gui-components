import React from 'react';
import Children from '../../utils/types/types';
export declare enum LABEL_POSITION {
  CONTAINED = 'contained',
  START = 'start',
  TOP = 'top',
  BOTTOM = 'bottom',
  END = 'end',
}
export declare enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}
export declare enum TYPE {
  DATE = 'date',
  FILE = 'file',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEXT = 'text',
}
export interface EntryFieldProps {
  label: string;
  testId: string;
  value: string | number;
  ariaDescription?: string;
  ariaTitle?: string;
  children?: Children;
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
  required?: boolean;
  rows?: number;
  select?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  toolTip?: string;
  type?: TYPE.DATE | TYPE.FILE | TYPE.NUMBER | TYPE.PASSWORD | TYPE.TEXT;
}
export declare function EntryField({
  ariaDescription,
  ariaTitle,
  children,
  disabled,
  errorText,
  height,
  helperText,
  inputRef,
  label,
  labelBold,
  labelPosition,
  labelWidth,
  name,
  onBlur,
  onFocus,
  prefix,
  required,
  rows,
  select,
  setValue,
  suffix,
  testId,
  toolTip,
  type,
  value,
}: EntryFieldProps): JSX.Element;
export default EntryField;
