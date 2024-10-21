import React from 'react';
import { LABEL_POSITION } from '../EntryField/EntryField';
export interface DropDownProps {
    options: {
        label: string;
        value: string | number;
    }[];
    testId: string;
    value: string | number;
    ariaDescription?: string;
    ariaTitle?: string;
    disabled?: boolean;
    errorText?: string;
    height?: number;
    helperText?: string;
    inputRef?: React.MutableRefObject<any>;
    label: string;
    labelBold?: boolean;
    labelPosition?: LABEL_POSITION;
    labelWidth?: number;
    name?: string;
    onFocus?: Function;
    required?: boolean;
    setValue?: Function;
}
export declare function DropDown({ ariaDescription, ariaTitle, disabled, errorText, height, helperText, inputRef, label, labelBold, labelPosition, labelWidth, name, onFocus, options, required, setValue, testId, value, }: DropDownProps): JSX.Element;
export default DropDown;
