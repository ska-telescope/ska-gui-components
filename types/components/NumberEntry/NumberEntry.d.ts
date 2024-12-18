import React from 'react';
import { LABEL_POSITION } from '../EntryField/EntryField.js';
export interface NumberEntryProps {
    label: string;
    value: number | string;
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
    password?: boolean;
    name?: string;
    onBlur?: Function;
    onFocus?: Function;
    prefix?: JSX.Element | string;
    required?: boolean | string;
    setValue?: Function;
    suffix?: JSX.Element | string;
    testId?: string;
    toolTip?: string;
}
export declare function NumberEntry({ ariaDescription, ariaTitle, disabled, errorText, height, helperText, inputRef, label, labelBold, labelPosition, labelWidth, name, onBlur, onFocus, prefix, required, setValue, suffix, testId, toolTip, value, }: NumberEntryProps): JSX.Element;
export default NumberEntry;
