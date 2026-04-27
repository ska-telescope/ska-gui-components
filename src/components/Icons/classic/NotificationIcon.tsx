interface NotificationIconProps {
  colorFG?: string;
  size?: number;
  title?: string;
  visual?: boolean;
}

export function NotificationIcon({
  colorFG = '#070068',
  size = 20,
  title = 'Notification Icon',
  visual = false,
}: Readonly<NotificationIconProps>) {
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
        <path
          fill={colorFG}
          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
        />
      </svg>
    </>
  );
}

export default NotificationIcon;
