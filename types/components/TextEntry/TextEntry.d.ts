import React from 'react';
import { LABEL_POSITION } from '../EntryField/EntryField';
export interface TextEntryProps {
    label: string;
    value: string;
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
    testId: string;
    toolTip?: string;
}
export declare function TextEntry({ ariaDescription, ariaTitle, disabled, errorText, height, helperText, inputRef, label, labelBold, labelPosition, labelWidth, name, onBlur, onFocus, password, prefix, required, rows, setValue, suffix, testId, toolTip, value, }: TextEntryProps): JSX.Element;
export default TextEntry;
