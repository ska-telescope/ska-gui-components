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
  toolTip?: string;
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
  toolTip,
}: StatusProps): import('react/jsx-runtime').JSX.Element;
export default StatusIcon;
