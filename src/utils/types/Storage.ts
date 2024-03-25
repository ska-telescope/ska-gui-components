import { Help, Telescope, THEME_DARK, THEME_LIGHT } from '@ska-telescope/ska-javascript-components';

const THEME_MODE = THEME_DARK || THEME_LIGHT;

type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
  themeMode: typeof THEME_MODE;
  toggleTheme: Function;
  updateTelescope?: Function;
};

export default Storage;
