import * as React from 'react';

export const SYMBOL_DEFAULT_HEIGHT = 30;
// const WIDTH_MULTIPLIER = 3.6;

interface SymbolProps {
  ariaDescription?: string;
  ariaTitle?: string;
  dark?: boolean;
  flatten?: boolean;
  height?: number;
}

const path =
  'M1175 2553 c-383 -35 -742 -246 -951 -559 -207 -310 -268 -674 -174  -1041 104 -402 419 -743 810 -876 157 -53 268 -69 455 -64 149 4 185 8 287 35  220 57 417 170 578 332 215 215 338 477 371 790 26 246 -40 541 -168 754 -216  359 -568 584 -982 625 -101 11 -144 11 -226 4z m158 -870 c27 -87 54 -168 60  -180 12 -20 19 -16 195 113 101 74 188 134 192 132 5 -2 -61 -76 -146 -165  l-156 -163 29 -11 c60 -23 299 -99 313 -99 35 0 -14 -20 -145 -59 -147 -44  -195 -61 -195 -68 0 -2 27 -44 61 -94 62 -93 70 -122 21 -78 -15 14 -50 46  -79 72 -29 26 -57 47 -62 47 -18 0 -40 -55 -88 -213 -25 -84 -49 -155 -52  -159 -4 -4 -29 65 -55 155 -27 89 -55 174 -62 189 l-14 27 -83 -49 c-45 -28  -83 -46 -85 -40 -2 5 19 38 47 72 28 35 51 66 51 70 0 4 -46 21 -102 38 -190  58 -238 74 -238 80 0 3 66 25 148 49 167 49 247 85 238 106 -3 8 -35 55 -72  105 -36 50 -64 94 -61 97 4 3 46 -27 94 -66 83 -68 88 -70 95 -49 59 197 92  298 97 298 4 0 28 -71 54 -157z m-123 41 c0 -19 -28 -30 -42 -16 -8 8 -8 15 1  26 14 17 41 10 41 -10z m1120 -129 c0 -21 -30 -31 -40 -14 -11 17 -3 29 21 29  10 0 19 -7 19 -15z m-665 -85 c0 -8 -10 -16 -22 -18 -22 -3 -32 16 -16 32 12  11 38 2 38 -14z m-976 -43 c12 -15 -3 -37 -25 -37 -17 0 -24 26 -11 39 14 14  22 14 36 -2z m1649 -30 c2 -11 -3 -17 -16 -17 -24 0 -32 8 -25 26 7 20 37 13  41 -9z m-1631 -188 c14 -14 6 -39 -12 -39 -18 0 -28 17 -21 35 6 18 18 19 33  4z m313 -78 c0 -19 -23 -35 -34 -24 -14 15 -5 43 14 43 13 0 20 -7 20 -19z  m-152 -84 c4 -20 -25 -34 -39 -20 -14 14 1 45 20 41 9 -2 17 -11 19 -21z m260   -205 c2 -14 -2 -22 -12 -22 -19 0 -29 17 -22 36 8 22 30 12 34 -14z m-71 -28  c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7 17 -16z';

export function Symbol({
  ariaDescription = 'SKAO symbol coloured with a stylized star in the centre',
  ariaTitle = 'SKAO Symbol',
  dark = false,
  flatten = false,
  height = SYMBOL_DEFAULT_HEIGHT,
}: SymbolProps) {
  const resolvedHeight = height ?? SYMBOL_DEFAULT_HEIGHT;

  return (
    <svg
      aria-label={ariaTitle}
      aria-describedby="svg-title svg-description"
      data-testid="skaoSymbol"
      height={resolvedHeight}
      width={resolvedHeight}
      preserveAspectRatio="xMinYMin meet"
      role="img"
      style={{ cursor: 'pointer' }}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 256.000000 256.000000"
    >
      <title id="svg-title">{ariaTitle}</title>
      <desc id="svg-description">{ariaDescription}</desc>
      <defs>
        <linearGradient id="RadialGradientSymbol" gradientTransform="rotate(6)">
          <stop offset="0%" stopColor="#E70068" />
          <stop offset="100%" stopColor="#070068" />
        </linearGradient>
      </defs>

      <g
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill={dark ? '#FFFFFF' : flatten ? '#070068' : 'url(#RadialGradientSymbol)'}
        stroke="none"
      >
        <path d={path} />
      </g>
    </svg>
  );
}
