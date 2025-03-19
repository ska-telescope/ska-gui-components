interface SearchIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function SearchIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Search Icon',
  visual = false,
}: SearchIconProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 0 384 512"
      id="SearchIcon"
    >
      <path
        fill={colorFG}
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
  );
}

export default SearchIcon;
