export type Help = {
    content: Object;
    component: Object;
    showHelp: Boolean;
};
export interface HelpModalProps {
    component?: boolean;
    help: Help;
    helpToggle: Function;
}
export declare function HelpModal({ component, help, helpToggle }: HelpModalProps): JSX.Element;
export default HelpModal;
