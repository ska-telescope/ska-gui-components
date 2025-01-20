import React from 'react';
export declare enum AlertColorTypes {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  None = 'none',
}
export declare enum AlertVariantTypes {
  Filled = 'filled',
  Outlined = 'outlined',
  Default = 'default',
}
export interface AlertProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  color?: AlertColorTypes;
  children?: JSX.Element;
  variant?: AlertVariantTypes;
  showIcon?: boolean;
  testId: string;
}
export declare function SKAOAlert({
  action,
  ariaDescription,
  ariaTitle,
  children,
  color,
  variant,
  showIcon,
  testId,
}: AlertProps): React.JSX.Element;
export default SKAOAlert;
