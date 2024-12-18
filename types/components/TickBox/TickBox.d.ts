import { LABEL_POSITION } from '../EntryField/EntryField.js';
export interface TickBoxProps {
    ariaDescription?: string;
    checked?: boolean;
    disabled?: boolean;
    fontSize?: number;
    label?: string;
    labelBold?: boolean;
    labelPosition?: LABEL_POSITION;
    labelWidth?: number;
    onChange?: Function;
    onFocus?: Function;
    required?: Boolean;
    testId?: string;
    toolTip?: string;
}
export declare function TickBox({ ariaDescription, checked, disabled, fontSize, label, labelBold, labelPosition, labelWidth, onChange, onFocus, required, testId, toolTip, }: TickBoxProps): JSX.Element;
export default TickBox;
