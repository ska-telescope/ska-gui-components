import { alpha } from '@mui/material/styles';
import { COLOR_PALETTE_SETS, Colors } from '@ska-telescope/ska-javascript-components';

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
      continuum: [paletteSet.colors[5], paletteSet.textColors[5]],
      spectral: [paletteSet.colors[6], paletteSet.textColors[6]],
      pst: [paletteSet.colors[7], paletteSet.textColors[7]],
      1: [paletteSet.colors[5], paletteSet.textColors[5]],
      0: [paletteSet.colors[6], paletteSet.textColors[6]],
      2: [paletteSet.colors[7], paletteSet.textColors[7]],
    },
    telescope: {
      1: [Colors().SKAO_TELESCOPE_1, '#FFFFFF'],
      2: [Colors().SKAO_TELESCOPE_2, '#000000'],
      mid: [Colors().SKAO_TELESCOPE_1, '#FFFFFF'],
      low: [Colors().SKAO_TELESCOPE_2, '#000000'],
    },
    boolean: {
      no: [paletteSet.colors[0], paletteSet.textColors[0]],
      yes: [paletteSet.colors[3], paletteSet.textColors[3]],
      false: [paletteSet.colors[0], paletteSet.textColors[0]],
      true: [paletteSet.colors[3], paletteSet.textColors[3]],
    },
    logo: {
      1: [Colors().SKAO_LOGO_PRIMARY, Colors().SKAO_LOGO_LIGHT],
      2: [Colors().SKAO_LOGO_ACCENT, Colors().SKAO_LOGO_LIGHT],
    },
    proposalStatus: {
      0: [paletteSet.colors[3], paletteSet.textColors[3]],
      1: [paletteSet.colors[4], paletteSet.textColors[4]],
      2: [paletteSet.colors[0], paletteSet.textColors[0]],
      3: [paletteSet.colors[2], paletteSet.textColors[2]],
      4: [paletteSet.colors[9], paletteSet.textColors[9]],
      5: [paletteSet.colors[5], paletteSet.textColors[5]],
      6: [paletteSet.colors[1], paletteSet.textColors[1]],
      accepted: [paletteSet.colors[3], paletteSet.textColors[3]],
      draft: [paletteSet.colors[4], paletteSet.textColors[4]],
      rejected: [paletteSet.colors[0], paletteSet.textColors[0]],
      submitted: [paletteSet.colors[2], paletteSet.textColors[2]],
      withdrawn: [paletteSet.colors[9], paletteSet.textColors[9]],
      'under review': [paletteSet.colors[5], paletteSet.textColors[5]],
      'accepted with revision': [paletteSet.colors[1], paletteSet.textColors[1]],
    },
    reviewStatus: {
      0: [paletteSet.colors[4], paletteSet.textColors[4]],
      1: [paletteSet.colors[5], paletteSet.textColors[5]],
      2: [paletteSet.colors[3], paletteSet.textColors[3]],
      'to do': [paletteSet.colors[4], paletteSet.textColors[4]],
      'in progress': [paletteSet.colors[5], paletteSet.textColors[5]],
      reviewed: [paletteSet.colors[3], paletteSet.textColors[3]],
    },
    status: {
      created: [paletteSet.colors[9], paletteSet.textColors[9]],
      draft: [paletteSet.colors[1], paletteSet.textColors[1]],
      submitted: [paletteSet.colors[0], paletteSet.textColors[0]],
      ready: [paletteSet.colors[5], paletteSet.textColors[5]],
      'in progress': [paletteSet.colors[6], paletteSet.textColors[6]],
      executing: [paletteSet.colors[1], paletteSet.textColors[1]],
      observed: [paletteSet.colors[4], paletteSet.textColors[4]],
      'fully observed': [paletteSet.colors[4], paletteSet.textColors[4]],
      complete: [paletteSet.colors[3], paletteSet.textColors[3]],
      cancelled: [paletteSet.colors[2], paletteSet.textColors[2]],
      'out of time': [paletteSet.colors[2], paletteSet.textColors[2]],
      suspended: [paletteSet.colors[7], paletteSet.textColors[7]],
      failed: [paletteSet.colors[2], paletteSet.textColors[2]],
      'failed processing': [paletteSet.colors[2], paletteSet.textColors[2]],
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
