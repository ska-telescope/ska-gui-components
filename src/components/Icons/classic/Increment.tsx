interface IncrementProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function Increment({
  colorFG = 'inherit',
  size = 10,
  title = 'Increment Icon',
  visual = false,
}: IncrementProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 0 10 10"
      id="Increment"
    >
      <path fill={colorFG} d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

export default Increment;
