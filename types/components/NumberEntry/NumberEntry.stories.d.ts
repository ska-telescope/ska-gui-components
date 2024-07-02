import { LABEL_POSITION } from '../EntryField/EntryField';
import NumberEntry from './NumberEntry';
declare const _default: {
    title: string;
    component: typeof NumberEntry;
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
        labelPosition: LABEL_POSITION;
        labelWidth: number;
        password: boolean;
        prefix: string;
        onFocus: undefined;
        required: boolean;
        suffix: string;
        value: string;
        setValue: undefined;
    };
};
