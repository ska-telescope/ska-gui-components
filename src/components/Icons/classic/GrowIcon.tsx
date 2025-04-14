interface GrowIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function GrowIcon({
  colorFG = 'inherit',
  size = 10,
  title = 'GrowIcon Icon',
  visual = false,
}: GrowIconProps) {
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
      id="GrowIcon"
    >
      <path
        fill={colorFG}
        d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z"
      />
    </svg>
  );
}

export default GrowIcon;
