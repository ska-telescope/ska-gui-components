import { Telescope } from '../TelescopeSelector/TelescopeSelector';
import { Help } from '../HelpModal/HelpModal';
import Children from '../../utils/types/types';
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
  selectTelescope?: boolean;
  showHelp?: boolean;
  storage: Storage;
  testId?: string;
  title?: string;
  toolTip?: {
    skao: string;
    mode: string;
  };
  useBrowserStorage?: boolean;
  useSymbol?: boolean;
  children?: Children;
}
export declare function Header({
  ariaDescription,
  ariaTitle,
  docs,
  selectTelescope,
  storage,
  showHelp,
  testId,
  title,
  toolTip,
  useBrowserStorage,
  useSymbol,
  children,
}: HeaderProps): JSX.Element;
export default Header;
