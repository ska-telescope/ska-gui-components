interface ArrowForwardIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function ArrowForwardIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Arrow Right Icon',
  visual = false,
}: ArrowForwardIconProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 0 320 512"
      id="ArrowForwardIcon"
    >
      <path
        fill={colorFG}
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      />
    </svg>
  );
}

export default ArrowForwardIcon;
