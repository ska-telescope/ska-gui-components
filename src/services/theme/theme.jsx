import { createTheme } from '@mui/material';
import { Theme } from '@ska-telescope/ska-javascript-components';

const theme = (mode) => createTheme(Theme(mode));

export default theme;
