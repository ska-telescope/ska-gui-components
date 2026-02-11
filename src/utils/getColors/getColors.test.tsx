import { describe, it, expect } from 'vitest';
import { getColors } from './getColors';
import {
  COLOR_PALETTE_SETS,
  COLOR_BLINDNESS_OPTIONS,
} from '@ska-telescope/ska-javascript-components';

describe('COLOR_PALETTE_SETS', () => {
  it('should contain 9 palette sets', () => {
    expect(COLOR_PALETTE_SETS.length).toBe(9);
  });

  it('each palette set should have 10 colors, textColors, and names', () => {
    COLOR_PALETTE_SETS.forEach(
      (set: { colors: string[]; textColors: string[]; names: string[] }) => {
        expect(set.colors.length).toBe(10);
        expect(set.textColors.length).toBe(10);
        expect(set.names.length).toBe(10);
      },
    );
  });

  it('COLOR_BLINDNESS_OPTIONS should align with sets', () => {
    expect(COLOR_BLINDNESS_OPTIONS.length).toBe(COLOR_PALETTE_SETS.length);
    COLOR_BLINDNESS_OPTIONS.forEach((opt: { label: string; value: number }, idx: number) => {
      expect(opt.label).toBe(COLOR_PALETTE_SETS[idx].label);
      expect(opt.value).toBe(idx);
    });
  });
});

describe('getColors', () => {
  it('should return semantic colors from Tableau-10 by default', () => {
    const result = getColors({
      type: 'observationType',
      colors: ['continuum', 'spectral', 'pst'],
      paletteIndex: 0,
    });
    expect(result).toBeDefined();
    expect(result!.continuum.bg).toContain('rgba(118, 183, 178, 1)');
    expect(result!.spectral.bg).toContain('rgba(255, 157, 167, 1)');
    expect(result!.pst.bg).toContain('rgba(156, 117, 95, 1)');
  });

  it('should return semantic colors from Original Default palette when paletteIndex=1', () => {
    const result = getColors({
      type: 'telescope',
      colors: ['low', 'mid'],
      paletteIndex: 1,
    });
    expect(result).toBeDefined();
    expect(result!.mid.bg).toContain('rgba(93, 64, 55, 1)');
    expect(result!.low.bg).toContain('rgba(251, 192, 45, 1)');
  });

  it('should return boolean colors from Protanopia palette when paletteIndex=2', () => {
    const result = getColors({
      type: 'boolean',
      colors: ['yes', 'no'],
      paletteIndex: 2,
    });
    expect(result!.yes.bg).toContain('rgba(56, 142, 60, 1)');
    expect(result!.no.bg).toContain('rgba(66, 66, 66, 1)');
  });

  it('should fall back to default mapping for unknown type', () => {
    const result = getColors({
      type: 'unknownType',
      colors: ['0'], // request index "0" from the default palette
      paletteIndex: 0,
    });

    // It should not be undefined anymore
    expect(result).toBeDefined();

    // And it should contain a bg/fg pair from the default palette
    expect(result!['0']).toHaveProperty('bg');
    expect(result!['0']).toHaveProperty('fg');
  });
});
