export declare enum ButtonColorTypes {
    Error = "error",
    Inherit = "inherit",
    Secondary = "secondary",
    Success = "success",
    Warning = "warning"
}
export declare enum ButtonSizeTypes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum ButtonVariantTypes {
    Contained = "contained",
    Outlined = "outlined",
    Text = "text"
}
export interface ButtonProps {
    ariaDescription?: string;
    color?: ButtonColorTypes;
    component?: string;
    disabled?: boolean;
    icon?: JSX.Element;
    label: string;
    onClick?: Function;
    size?: ButtonSizeTypes;
    testId: string;
    toolTip?: string;
    variant?: ButtonVariantTypes;
}
export declare function OurButton({ ariaDescription, color, component, disabled, icon, label, onClick, size, testId, toolTip, variant, }: ButtonProps): JSX.Element;
export default OurButton;
