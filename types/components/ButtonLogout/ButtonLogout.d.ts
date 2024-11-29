import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';
export interface ButtonLogoutProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  component?: string;
  disabled?: boolean;
  icon?: JSX.Element | string;
  label: string;
  onError?: Function;
  size?: ButtonSizeTypes;
  testId: string;
  toolTip?: string;
  variant?: ButtonVariantTypes;
}
export declare function ButtonLogout({
  ariaDescription,
  color,
  component,
  disabled,
  icon,
  label,
  size,
  testId,
  toolTip,
  variant,
}: ButtonLogoutProps): JSX.Element;
