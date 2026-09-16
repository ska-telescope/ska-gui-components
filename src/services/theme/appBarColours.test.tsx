import { describe, it, expect } from 'vitest';
import { getAppBarOverride, SKA_TOOL_BAR_COLOURS } from './appBarColours';

describe('SKA_TOOL_BAR_COLORS', () => {
  it('should define a light and dark colour for every tool', () => {
    (['odt', 'ost', 'ptt', 'slt'] as const).forEach((tool) => {
      expect(SKA_TOOL_BAR_COLOURS[tool]).toHaveProperty('light');
      expect(SKA_TOOL_BAR_COLOURS[tool]).toHaveProperty('dark');
    });
  });
});

describe('getAppBarOverride', () => {
  it('should return the light background colour for a tool', () => {
    const result = getAppBarOverride('ost', 'light');
    expect(result.components.MuiAppBar.styleOverrides.colorPrimary.backgroundColor).toBe(
      SKA_TOOL_BAR_COLOURS.ost.light,
    );
  });

  it('should return the dark background colour for a tool', () => {
    const result = getAppBarOverride('slt', 'dark');
    expect(result.components.MuiAppBar.styleOverrides.colorPrimary.backgroundColor).toBe(
      SKA_TOOL_BAR_COLOURS.slt.dark,
    );
  });
});
