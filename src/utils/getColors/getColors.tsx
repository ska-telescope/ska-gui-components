import { alpha } from '@mui/material/styles';
import { COLOR_PALETTE_SETS } from '@ska-telescope/ska-javascript-components';

type ContentType = 'bg' | 'fg' | 'both';

interface GetColorsInput {
  type: string /* semantic type (observationType, telescope, boolean, etc.) */;
  colors: string | string[] /* keys to look up */;
  content?: ContentType;
  dim?: number;
  asArray?: boolean;
  paletteIndex?: number /* which blindness palette set to use */;
}

export function getColors(
  args: GetColorsInput & { asArray?: false },
): Record<string, { bg?: string; fg?: string }> | undefined;
export function getColors(args: GetColorsInput & { asArray: true }): string[] | undefined;

export function getColors({
  type,
  colors,
  content = 'both',
  dim = 1,
  asArray = false,
  paletteIndex = 0,
}: GetColorsInput): any {
  const paletteSet = COLOR_PALETTE_SETS[paletteIndex];
  if (!paletteSet) return undefined;

  const paletteMap: Record<string, Record<string, [string, string]>> = {
    observationType: {
      continuum: [paletteSet.colors[0], paletteSet.textColors[0]],
      spectral: [paletteSet.colors[3], paletteSet.textColors[3]],
      pst: [paletteSet.colors[2], paletteSet.textColors[2]],
      1: [paletteSet.colors[0], paletteSet.textColors[0]],
      0: [paletteSet.colors[3], paletteSet.textColors[3]],
      2: [paletteSet.colors[2], paletteSet.textColors[2]],
    },
    telescope: {
      low: [paletteSet.colors[1], paletteSet.textColors[1]],
      mid: [paletteSet.colors[4], paletteSet.textColors[4]],
      2: [paletteSet.colors[1], paletteSet.textColors[1]],
      1: [paletteSet.colors[4], paletteSet.textColors[4]],
    },
    boolean: {
      no: [paletteSet.colors[9], paletteSet.textColors[9]],
      yes: [paletteSet.colors[3], paletteSet.textColors[3]],
      false: [paletteSet.colors[9], paletteSet.textColors[9]],
      true: [paletteSet.colors[3], paletteSet.textColors[3]],
    },
  };

  const mapping =
    type && paletteMap[type]
      ? paletteMap[type]
      : Object.fromEntries(
          paletteSet.colors.map((c: any, i: string | number) => [
            String(i),
            [c, paletteSet.textColors[i]],
          ]),
        );

  const colorList =
    colors === '' || colors === '*'
      ? Object.keys(mapping)
      : Array.isArray(colors)
        ? colors
        : [colors];

  const result: Record<string, { bg?: string; fg?: string }> = {};

  colorList.forEach((level) => {
    const palette = mapping[level] ?? ['#cccccc', '#000000'];
    result[level] = {};
    if (content === 'bg' || content === 'both') result[level].bg = alpha(palette[0], dim);
    if (content === 'fg' || content === 'both') result[level].fg = palette[1];
  });

  if (asArray) {
    return Object.values(result)
      .map((c) => c.bg)
      .filter(Boolean) as string[];
  }

  return result;
}
