import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import type { Decorator } from '@storybook/react';
import { THEME_LIGHT, THEME_DARK, TELESCOPE_LOW } from "@ska-telescope/ska-javascript-components";
import Footer from './Footer';
import { createSKATheme, SKAThemeMode } from '../../services/theme/createSKATheme';
import { getAppBarOverride } from '../../services/theme/appBarColours';
import type { SKATool } from '../../services/theme/appBarColours';

export default {
    title: 'Example/Footer/Tool Colours',
    component: Footer,
};

const baseArgs = { version: "1.0.0"};

const withToolTheme = (tool: SKATool, mode: SKAThemeMode): Decorator => (Story) => {
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