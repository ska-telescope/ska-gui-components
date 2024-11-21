import React from 'react';
export declare enum AlertColorTypes {
    Error = "error",
    Info = "info",
    Success = "success",
    Warning = "warning"
}
export declare enum AlertVariantTypes {
    Filled = "filled",
    Outlined = "outlined"
}
export interface AlertProps {
    action?: any;
    ariaDescription?: string;
    ariaTitle?: string;
    color?: AlertColorTypes;
    children?: JSX.Element;
    variant?: AlertVariantTypes;
    testId: string;
}
export declare function SKAOAlert({ action, ariaDescription, ariaTitle, children, color, variant, testId, }: AlertProps): React.JSX.Element;
export default SKAOAlert;
