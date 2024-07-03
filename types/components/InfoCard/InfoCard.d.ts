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
  message: string;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId: string;
  variant?: InfoCardVariantTypes;
}
export declare function InfoCard({
  ariaDescription,
  ariaTitle,
  clickFunction,
  color,
  fontSize,
  message,
  showStatus,
  showStatusIcon,
  testId,
  variant,
}: InfoCardProps): React.JSX.Element;
export default InfoCard;
