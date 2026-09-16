import type { SKAThemeMode } from './createSKATheme';

export type SKATool = 'odt' | 'ost' | 'ptt' | 'slt';

export const SKA_TOOL_BAR_COLOURS: Record<SKATool, { light: string; dark: string }> = {
  odt: { light: '#DBB7AA', dark: '#A64B2A' },
  ost: { light: '#A6D2D7', dark: '#1F8E9B' },
  ptt: { light: '#C4B2D9', dark: '#6B3FA0' },
  slt: { light: '#E9D5AB', dark: '#C9962E' },
};

export function getAppBarOverride(tool: SKATool, mode: SKAThemeMode) {
  const clr = SKA_TOOL_BAR_COLOURS[tool];
  const backgroundColor = mode === 'dark' ? clr.dark : clr.light;
  return {
    components: {
      MuiAppBar: { styleOverrides: { colorPrimary: { backgroundColor } } },
    },
  };
}
