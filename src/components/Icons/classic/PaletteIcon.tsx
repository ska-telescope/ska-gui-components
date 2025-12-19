interface PaletteIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function PaletteIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Color Palette Icon',
  visual = false,
}: PaletteIconProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 0 24 24"
      id="PaletteIcon"
    >
      <path
        fill={colorFG}
        d="M 12 22 C 6.49 22 2 17.51 2 12 S 6.49 2 12 2 s 10 4.04 10 9 c 0 3.31 -2.69 6 -6 6 h -1.77 c -0.28 0 -0.5 0.22 -0.5 0.5 c 0 0.12 0.05 0.23 0.13 0.33 c 0.41 0.47 0.64 1.06 0.64 1.67 c 0 1.38 -1.12 2.5 -2.5 2.5 m 0 -18 c -4.41 0 -8 3.59 -8 8 s 3.59 8 8 8 c 0.28 0 0.5 -0.22 0.5 -0.5 c 0 -0.16 -0.08 -0.28 -0.14 -0.35 c -0.41 -0.46 -0.63 -1.05 -0.63 -1.65 c 0 -1.38 1.12 -2.5 2.5 -2.5 H 16 c 2.21 0 4 -1.79 4 -4 c 0 -3.86 -3.59 -7 -8 -7"
      />
      <circle cx="6.5" cy="11.5" r="1.5" fill={colorFG} />
      <circle cx="9.5" cy="7.5" r="1.5" fill={colorFG} />
      <circle cx="14.5" cy="7.5" r="1.5" fill={colorFG} />
      <circle cx="17.5" cy="11.5" r="1.5" fill={colorFG} />
    </svg>
  );
}

export default PaletteIcon;
