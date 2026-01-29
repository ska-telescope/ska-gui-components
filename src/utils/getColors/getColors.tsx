import { alpha } from '@mui/material/styles';
import { COLOR_PALETTE_SETS, Colors } from '@ska-telescope/ska-javascript-components';

type ContentType = 'bg' | 'fg' | 'both';

// Colors based on the high contrast palette
const COLOR_RED = 0;
const COLOR_ORANGE = 1;
const COLOR_YELLOW = 2;
const COLOR_GREEN = 3;
const COLOR_BLUE = 4;
const COLOR_PURPLE = 5;
const COLOR_PINK = 6;
const COLOR_BROWN = 7;
// const COLOR_GREY_DARK = 8;
const COLOR_GREY_LIGHT = 9;

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
      continuum: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      spectral: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      pst: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      1: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      0: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      2: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
    },
    telescope: {
      1: [Colors().SKAO_TELESCOPE_1, '#FFFFFF'],
      2: [Colors().SKAO_TELESCOPE_2, '#000000'],
      mid: [Colors().SKAO_TELESCOPE_1, '#FFFFFF'],
      low: [Colors().SKAO_TELESCOPE_2, '#000000'],
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
      created: [paletteSet.colors[COLOR_RED], paletteSet.textColors[COLOR_RED]],
      draft: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      submitted: [paletteSet.colors[COLOR_BLUE], paletteSet.textColors[COLOR_BLUE]],
      ready: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      'in progress': [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      executing: [paletteSet.colors[COLOR_YELLOW], paletteSet.textColors[COLOR_YELLOW]],
      observed: [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      'fully observed': [paletteSet.colors[COLOR_PINK], paletteSet.textColors[COLOR_PINK]],
      complete: [paletteSet.colors[COLOR_GREEN], paletteSet.textColors[COLOR_GREEN]],
      cancelled: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      'out of time': [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      suspended: [paletteSet.colors[COLOR_PURPLE], paletteSet.textColors[COLOR_PURPLE]],
      failed: [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
      'failed processing': [paletteSet.colors[COLOR_BROWN], paletteSet.textColors[COLOR_BROWN]],
    },
  };

  const mapping =
    type && paletteMap[type]
      ? paletteMap[type]
      : Object.fromEntries(
          paletteSet.colors.map((c: any, i: number) => [String(i), [c, paletteSet.textColors[i]]]),
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
      return Object.values(result).map((c) => c.bg);
    }
    if (content === 'fg') {
      return Object.values(result).map((c) => c.fg);
    }
    // content === 'both'
    return {
      bg: Object.values(result).map((c) => c.bg),
      fg: Object.values(result).map((c) => c.fg),
    };
  }

  return result;
}
