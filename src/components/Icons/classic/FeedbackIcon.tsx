interface FeedbackIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function FeedbackIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Feedback Icon',
  visual = false,
}: FeedbackIconProps) {
  const pulseStyle: React.CSSProperties = {
    animation: 'pulse 1.5s infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={visual ? pulseStyle : undefined}
        aria-label={title}
      >
        <path fill={colorFG} d="M2 2v20l4-4h16V2H2zm16 12H6v-2h12v2zm0-4H6V8h12v2z" />
      </svg>
    </>
  );
}

export default FeedbackIcon;
