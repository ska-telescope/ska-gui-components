import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button.js';
export interface ButtonLogoutProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  component?: string;
  disabled?: boolean;
  label: string;
  onError?: Function;
  size?: ButtonSizeTypes;
  testId?: string;
  toolTip?: string;
  variant?: ButtonVariantTypes;
}
export declare function ButtonLogout({
  ariaDescription,
  color,
  component,
  disabled,
  label,
  size,
  testId,
  toolTip,
  variant,
}: ButtonLogoutProps): JSX.Element;
