import React from 'react';
interface StatusProps {
  ariaDescription?: string;
  ariaTitle?: string;
  children?: React.ReactElement | string;
  icon?: boolean;
  level?: number;
  size?: number;
  testId: string;
  text?: string;
}
export declare function StatusIcon({
  ariaDescription,
  ariaTitle,
  children,
  icon,
  level,
  size,
  testId,
  text,
}: StatusProps): React.JSX.Element;
export default StatusIcon;
