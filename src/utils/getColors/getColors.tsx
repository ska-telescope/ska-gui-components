import { alpha } from '@mui/material/styles';
import { COLOR_PALETTE_SETS, Colors } from '@ska-telescope/ska-javascript-components';

type ContentType = 'bg' | 'fg' | 'both';

// Colors based on the high contrast palette
export const COLOR_RED = 0;
export const COLOR_ORANGE = 1;
export const COLOR_YELLOW = 2;
export const COLOR_GREEN = 3;
export const COLOR_BLUE = 4;
export const COLOR_PURPLE = 5;
export const COLOR_PINK = 6;
export const COLOR_BROWN = 7;
export const COLOR_GREY_DARK = 8;
export const COLOR_GREY_LIGHT = 9;

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
export function getColors(
  args: GetColorsInput & { asArray: true; content?: 'bg' | 'fg' },
): string[] | undefined;
export function getColors(
  args: GetColorsInput & { asArray: true; content: 'both' },
): { bg: string[]; fg: string[] } | undefined;

export function getColors({
  type,
  colors,
  content = 'both',
  dim = 1,
  asArray = false,
  paletteIndex = 0,
}: GetColorsInput):
  | Record<string, { bg?: string; fg?: string }>
  | string[]
  | { bg: string[]; fg: string[] }
  | undefined {
  const paletteSet = COLOR_PALETTE_SETS[paletteIndex];
  if (!paletteSet) return undefined;

  const paletteMap: Record<string, Record<string, [string, string]>> = {
    observationType: {
      continuum: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      spectral: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      pst: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      1: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      0: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      2: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
    },
    telescope: {
      1: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      2: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      mid: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      low: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
    },
    boolean: {
      no: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      yes: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      false: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      true: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
    },
    logo: {
      1: [Colors().SKAO_LOGO_PRIMARY, Colors().SKAO_LOGO_LIGHT],
      2: [Colors().SKAO_LOGO_ACCENT, Colors().SKAO_LOGO_LIGHT],
    },
    proposalStatus: {
      0: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      1: [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      2: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      3: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      4: [paletteSet.colors[COLOR_GREY_LIGHT], paletteSet.textColors[COLOR_GREY_LIGHT]],
      5: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      6: [paletteSet.colors[COLOR_ORANGE], paletteSet.textColors[COLOR_ORANGE]],
      accepted: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      draft: [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      rejected: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      submitted: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      withdrawn: [paletteSet.colors[COLOR_GREY_LIGHT], paletteSet.textColors[COLOR_GREY_LIGHT]],
      'under review': [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      'accepted with revision': [
        paletteSet.colors[COLOR_ORANGE],
        paletteSet.textColors[COLOR_ORANGE],
      ],
    },
    reviewStatus: {
      0: [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      1: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      2: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      'to do': [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      'in progress': [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      reviewed: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
    },
    status: {
      created: [paletteSet.colors[COLOR_GREY_DARK], paletteSet.textColors[COLOR_GREY_DARK]],
      draft: [paletteSet.colors[COLOR_GREY_DARK], paletteSet.textColors[COLOR_GREY_DARK]],
      submitted: [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      ready: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      'in progress': [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      executing: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      observed: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      'fully observed': [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      complete: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      cancelled: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      'out of time': [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      suspended: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      failed: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      'failed processing': [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
    },
  };

  const mapping =
    type && paletteMap[type]
      ? paletteMap[type]
      : Object.fromEntries(
          paletteSet.colors.map((c: string, i: number) => [
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
    const bgColor = palette[0];
    const fgColor = palette[1];

    result[level] = {};

    if (content === 'bg' || content === 'both') {
      result[level].bg = alpha(bgColor, dim);
    }
    if (content === 'fg' || content === 'both') {
      result[level].fg = fgColor;
    }
  });

  // --- FIXED ARRAY MODE ---
  if (asArray) {
    if (content === 'bg') {
      return Object.values(result)
        .map((c) => c.bg)
        .filter((c): c is string => c !== undefined);
    }
    if (content === 'fg') {
      return Object.values(result)
        .map((c) => c.fg)
        .filter((c): c is string => c !== undefined);
    }
    // content === 'both'
    return {
      bg: Object.values(result)
        .map((c) => c.bg)
        .filter((c): c is string => c !== undefined),
      fg: Object.values(result)
        .map((c) => c.fg)
        .filter((c): c is string => c !== undefined),
    } as { bg: string[]; fg: string[] };
  }

  return result;
}
