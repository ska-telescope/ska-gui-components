import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { THEME_LIGHT, THEME_DARK, TELESCOPE_LOW } from "@ska-telescope/ska-javascript-components";
import Header from './Header';
import { createSKATheme } from '../../services/theme/createSKATheme';
import { getAppBarOverride } from '../../services/theme/appBarColours';

export default {
    title: 'Example/Header/Tool Colours',
    component: Header,
};

const theStorage ={
    help: null,
    helpLabel: 'Help',
    colorLabel: 'Colour',
    helpToggle: null,
    telescope: TELESCOPE_LOW,
    themeMode: { 
        mode: THEME_LIGHT 
    },
    toggleTheme: null,
    updateTelescope: null,
    flatten: false,
};

const baseArgs = {
    title: 'ska-gui-components',
    storage: theStorage,
    selectTelescope: false,
    toolTip: { skao: 'SKAO Website', mode: 'Light / Dark Mode' },
    docs: { label: 'Docs', tooltip: 'Docs', url: 'https://www.skao.int/' },
};

const withToolTheme = (tool, mode) => (Story) => {
    const theme = createTheme(createSKATheme(mode, 0), getAppBarOverride(tool, mode));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

export const ODT = { args: baseArgs, decorators: [withToolTheme('odt', THEME_LIGHT)] };
export const OST = { args: baseArgs, decorators: [withToolTheme('ost', THEME_LIGHT)] };
export const PTT = { args: baseArgs, decorators: [withToolTheme('ptt', THEME_LIGHT)] };
export const SLT = { args: baseArgs, decorators: [withToolTheme('slt', THEME_LIGHT)] };


export const ODTDark = { args: baseArgs, decorators: [withToolTheme('odt', THEME_DARK)] };
export const OSTDark = { args: baseArgs, decorators: [withToolTheme('ost', THEME_DARK)] };
export const PTTDark = { args: baseArgs, decorators: [withToolTheme('ptt', THEME_DARK)] };
export const SLTDark = { args: baseArgs, decorators: [withToolTheme('slt', THEME_DARK)] };