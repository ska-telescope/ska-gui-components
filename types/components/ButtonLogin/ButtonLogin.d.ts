import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';
export interface ButtonLoginProps {
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
export declare function ButtonLogin({
  ariaDescription,
  color,
  component,
  disabled,
  icon,
  label,
  onError,
  size,
  testId,
  toolTip,
  variant,
}: ButtonLoginProps): JSX.Element;
