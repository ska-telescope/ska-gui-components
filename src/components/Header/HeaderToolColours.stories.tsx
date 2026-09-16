import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import type { Decorator } from '@storybook/react';
import { THEME_LIGHT, THEME_DARK, TELESCOPE_LOW } from "@ska-telescope/ska-javascript-components";
import Header from './Header';
import { createSKATheme, SKAThemeMode } from '../../services/theme/createSKATheme';
import { getAppBarOverride } from '../../services/theme/appBarColours';
import type { SKATool } from '../../services/theme/appBarColours';

export default {
    title: 'Example/Header/Tool Colours',
    component: Header,
};

const makeStorage = (mode: SKAThemeMode) => ({
    help: null,
    helpLabel: 'Help',
    colorLabel: 'Colour',
    helpToggle: null,
    telescope: TELESCOPE_LOW,
    themeMode: mode,
    toggleTheme: null,
    updateTelescope: null,
    flatten: false,
});

const makeArgs = (mode: SKAThemeMode) => ({
    title: 'ska-gui-components',
    storage: makeStorage(mode),
    selectTelescope: false,
    toolTip: { skao: 'SKAO Website', mode: 'Light / Dark Mode' },
    docs: { label: 'Docs', tooltip: 'Docs', url: 'https://www.skao.int/' },
});

const withToolTheme = (tool: SKATool, mode: SKAThemeMode): Decorator => (Story) => {
    const theme = createTheme(createSKATheme(mode, 0), getAppBarOverride(tool, mode));
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

const makeStory = (tool: SKATool, mode: SKAThemeMode) => ({
    args: makeArgs(mode),
    decorators: [withToolTheme(tool, mode)],
})

export const ODT = makeStory('odt', THEME_LIGHT)
export const OST = makeStory('ost', THEME_LIGHT)
export const PTT = makeStory('ptt', THEME_LIGHT)
export const SLT = makeStory('slt', THEME_LIGHT)

export const ODTDark = makeStory('odt', THEME_DARK)
export const OSTDark = makeStory('ost', THEME_DARK)
export const PTTDark = makeStory('ptt', THEME_DARK)
export const SLTDark = makeStory('slt', THEME_DARK)
