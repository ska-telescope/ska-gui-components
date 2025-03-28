import { ReactNode } from 'react';
export interface IconButtonProps {
  ariaDescription?: string;
  ariaTitle?: string;
  icon: JSX.Element;
  onClick?: Function;
  testId?: string;
  toolTip?: string | ReactNode | null;
}
export declare function OurIconButton({
  ariaDescription,
  ariaTitle,
  onClick,
  icon,
  testId,
  toolTip,
}: IconButtonProps): import('react/jsx-runtime').JSX.Element;
export default OurIconButton;
