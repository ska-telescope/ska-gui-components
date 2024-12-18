import React from 'react';
import { AlertColorTypes, AlertVariantTypes } from '../Alert/Alert.js';
export interface AlertCardProps {
    action?: any;
    ariaDescription?: string;
    ariaTitle?: string;
    array: {
        color: AlertColorTypes;
        hideValue: boolean;
        title: string;
        value: number;
        variant: AlertVariantTypes;
    }[];
    clickFunction?: Function;
    variant?: AlertVariantTypes;
    showStatus?: boolean;
    showStatusIcon?: boolean;
    testId: string;
    title?: string;
}
export declare function AlertCard({ action, ariaDescription, ariaTitle, array, clickFunction, showStatus, showStatusIcon, testId, title, variant, }: AlertCardProps): React.JSX.Element;
export default AlertCard;
