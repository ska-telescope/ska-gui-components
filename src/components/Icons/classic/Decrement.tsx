interface DecrementProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function Decrement({
  colorFG = 'inherit',
  size = 10,
  title = 'Increment Icon',
  visual = false,
}: DecrementProps) {
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
      id="Decrement"
    >
      <path fill={colorFG} d="M0 5H10" />
    </svg>
  );
}

export default Decrement;
