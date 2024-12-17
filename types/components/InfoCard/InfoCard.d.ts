import React from 'react';
export declare enum InfoCardColorTypes {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}
export declare enum InfoCardVariantTypes {
  Filled = 'filled',
  Outlined = 'outlined',
}
export interface InfoCardProps {
  ariaDescription?: string;
  ariaTitle?: string;
  clickFunction?: Function;
  color?: InfoCardColorTypes;
  fontSize?: number;
  maxHeight?: string;
  minHeight?: string;
  message?: string;
  children?: JSX.Element;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId?: string;
  variant?: InfoCardVariantTypes;
}
export declare function InfoCard({
  ariaDescription,
  ariaTitle,
  clickFunction,
  color,
  fontSize,
  maxHeight,
  minHeight,
  message,
  children,
  showStatus,
  showStatusIcon,
  testId,
  variant,
}: InfoCardProps): React.JSX.Element;
export default InfoCard;
