import { AlertVariantTypes } from '../Alert/Alert';
import AlertCard from './AlertCard';
declare const _default: {
    title: string;
    component: typeof AlertCard;
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const Default: {
    parameters: {
        backgrounds: {
            default: string;
        };
    };
    args: {
        ariaTitle: string;
        ariaDescription: string;
        array: {
            color: import("../Alert/Alert").AlertColorTypes;
            title: string;
            variant: AlertVariantTypes;
            value: number;
            hideValue: boolean;
        }[];
        title: string;
        variant: AlertVariantTypes;
    };
};
export declare const Dark: {
    parameters: {
        backgrounds: {
            default: string;
        };
    };
    args: {
        ariaTitle: string;
        ariaDescription: string;
        array: {
            color: import("../Alert/Alert").AlertColorTypes;
            title: string;
            variant: AlertVariantTypes;
            value: number;
            hideValue: boolean;
        }[];
        title: string;
        variant: AlertVariantTypes;
    };
};
