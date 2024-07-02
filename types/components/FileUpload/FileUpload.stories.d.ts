import { ButtonSizeTypes } from '../Button/Button';
import FileUpload from './FileUpload';
declare const _default: {
    title: string;
    component: typeof FileUpload;
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const Light: {
    args: {
        buttonSize: ButtonSizeTypes;
        chooseDisabled: boolean;
        chooseFileTypes: string;
        chooseLabel: string;
        chooseToolTip: string;
        direction: string;
        maxFileWidth: number;
        clearLabel: string;
        clearToolTip: string;
        uploadDisabled: boolean;
        uploadLabel: string;
        uploadURL: string;
        uploadToolTip: string;
    };
};
export declare const Dark: {
    parameters: {
        backgrounds: {
            default: string;
        };
    };
    args: {
        chooseSize: ButtonSizeTypes;
        chooseDisabled: boolean;
        chooseFileTypes: string;
        chooseLabel: string;
        chooseToolTip: string;
        direction: string;
        maxFileWidth: number;
        uploadDisabled: boolean;
        uploadLabel: string;
        uploadURL: string;
        uploadToolTip: string;
    };
};
