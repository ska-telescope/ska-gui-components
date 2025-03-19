import { createTheme } from '@mui/material/styles';
import { THEME_DARK, THEME_LIGHT, Theme } from '@ska-telescope/ska-javascript-components';

const theme = (mode) => createTheme(Theme(mode));

export { THEME_DARK, THEME_LIGHT, theme };
