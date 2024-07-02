import { LABEL_POSITION } from '../EntryField/EntryField';
import { TickBox } from './TickBox';
declare const _default: {
    title: string;
    component: typeof TickBox;
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const Default: {
    args: {
        ariaTitle: string;
        ariaDescription: string;
        disabled: boolean;
        errorText: string;
        helperText: string;
        label: string;
        labelBold: boolean;
        labelPosition: LABEL_POSITION;
        labelWidth: number;
        prefix: string;
        onFocus: undefined;
        required: boolean;
        testId: string;
        suffix: string;
        value: string;
    };
};
