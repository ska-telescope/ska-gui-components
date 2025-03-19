interface AddIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function AddIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Add Icon',
  visual = false,
}: AddIconProps) {
  return (
    <svg
      aria-hidden={visual}
      aria-labelledby={title}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size}
      width={size}
      role="img"
      viewBox="0 0 448 512"
      id="AddIcon"
    >
      <path
        fill={colorFG}
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
      />
    </svg>
  );
}

export default AddIcon;
