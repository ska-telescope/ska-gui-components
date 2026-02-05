export type Help = {
  content: object;
  component: object;
  showHelp: boolean;
};
export interface HelpModalProps {
  ariaDescription?: string;
  component?: boolean;
  help: Help;
  helpToggle: Function;
  toolTip?: string;
}
export declare function HelpModal({
  ariaDescription,
  component,
  help,
  helpToggle,
  toolTip,
}: HelpModalProps): JSX.Element;
export default HelpModal;
