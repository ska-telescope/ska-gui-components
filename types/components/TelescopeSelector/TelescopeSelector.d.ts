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
export interface TelescopeSelectorProps {
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  reversed?: boolean;
  telescope: Telescope;
  toolTip?: string;
  updateTelescope: Function;
}
export declare function TelescopeSelector({
  ariaDescription,
  ariaTitle,
  disabled,
  reversed,
  telescope,
  toolTip,
  updateTelescope,
}: TelescopeSelectorProps): JSX.Element;
export default TelescopeSelector;
