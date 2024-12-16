import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button.js';
export interface ButtonLoginProps {
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
export declare function ButtonLogin({
  ariaDescription,
  color,
  component,
  disabled,
  label,
  onError,
  size,
  testId,
  toolTip,
  variant,
}: ButtonLoginProps): JSX.Element;
