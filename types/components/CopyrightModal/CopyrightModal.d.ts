export interface CopyrightModalProps {
    ariaDescription?: string;
    copyrightFunc: Function;
    show: boolean;
    title?: string;
    toolTip?: string;
}
export declare function CopyrightModal({ ariaDescription, copyrightFunc, show, title, toolTip, }: CopyrightModalProps): JSX.Element;
export default CopyrightModal;
