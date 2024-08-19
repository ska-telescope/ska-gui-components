export interface ButtonToggleProps {
    ariaDescription?: string;
    ariaTitle?: string;
    current: string;
    disabled?: boolean;
    options: {
        id: string;
        label: string;
        value: any;
    }[];
    setValue?: Function;
    testId: string;
    toolTip?: string;
    value: any;
}
export declare function ButtonToggle({ ariaDescription, ariaTitle, current, disabled, setValue, value, options, testId, toolTip, }: ButtonToggleProps): JSX.Element;
export default ButtonToggle;
