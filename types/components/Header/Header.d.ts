export type Help = {
  content: Object;
  component: Object;
  showHelp: Boolean;
};
export type Telescope = {
  code: string;
  name: string;
  location: string;
  position: {
    lat: number;
    lon: number;
  };
  image: string;
};
export type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
  themeMode: string;
  toggleTheme: Function;
  updateTelescope?: Function;
};
export interface HeaderProps {
  ariaDescription?: string;
  ariaTitle?: string;
  docs?: {
    tooltip: string;
    url: string;
  };
  showHelp?: boolean;
  storage: Storage;
  testId?: string;
  title?: string;
  toolTip?: {
    skao: string;
    mode: string;
  };
  useSymbol?: Boolean;
  children?: JSX.Element[];
}
export declare function Header({
  ariaDescription,
  ariaTitle,
  docs,
  storage,
  showHelp,
  testId,
  title,
  toolTip,
  useSymbol,
  children,
}: HeaderProps): JSX.Element;
export default Header;
