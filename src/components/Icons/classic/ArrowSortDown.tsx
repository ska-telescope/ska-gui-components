interface ArrowSortDownProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function ArrowSortDown({
  colorFG = 'inherit',
  size = 15,
  title = 'Arrow Down Icon',
  visual = false,
}: ArrowSortDownProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 50 320 512"
      id="ArrowSortDown"
    >
      <path
        fill={colorFG}
        d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
      />
    </svg>
  );
}

export default ArrowSortDown;
