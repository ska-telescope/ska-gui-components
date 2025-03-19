interface ArrowBackIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function ArrowBackIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Arrow Left Icon',
  visual = false,
}: ArrowBackIconProps) {
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
      id="ArrowBackIcon"
    >
      <path
        fill={colorFG}
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      />
    </svg>
  );
}

export default ArrowBackIcon;
