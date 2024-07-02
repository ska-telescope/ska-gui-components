import InfoCard, { InfoCardColorTypes, InfoCardVariantTypes } from './InfoCard';
declare const _default: {
    title: string;
    component: typeof InfoCard;
    parameters: {
        layout: string;
    };
};
export default _default;
export declare const Default: {
    args: {
        ariaTitle: string;
        ariaDescription: string;
        message: string;
        variant: InfoCardVariantTypes;
        color: InfoCardColorTypes;
        fontSize: number;
        testId: string;
        showStatus: boolean;
        showStatusIcon: boolean;
    };
};
