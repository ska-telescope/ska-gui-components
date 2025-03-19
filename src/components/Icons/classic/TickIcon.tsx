interface TickIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function TickIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Tick Icon',
  visual = false,
}: TickIconProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 -30 448 522"
      id="TickIcon"
    >
      <path
        fill={colorFG}
        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      />
    </svg>
  );
}

export default TickIcon;
