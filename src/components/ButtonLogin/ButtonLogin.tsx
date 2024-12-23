import React from 'react';
import { useMsal } from '@azure/msal-react';
import {
  OurButton,
  ButtonColorTypes,
  ButtonSizeTypes,
  ButtonVariantTypes,
} from '../Button/Button.js';
import { loginRequest } from '../../utils/authConfig.js';

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

export function ButtonLogin({
  ariaDescription = 'Login Button',
  color = ButtonColorTypes.Success,
  component = 'button',
  disabled = false,
  label,
  onError,
  size = ButtonSizeTypes.Medium,
  testId = 'loginButtton-' + label,
  toolTip = '',
  variant = ButtonVariantTypes.Outlined,
}: ButtonLoginProps): React.JSX.Element {
  const { instance } = useMsal();

  function handleLogin() {
    instance.loginRedirect(loginRequest).catch((e) => {
      if (onError) {
        onError(e);
      }
    });
  }

  return (
    <OurButton
      ariaDescription={ariaDescription}
      color={color}
      component={component}
      disabled={disabled}
      icon="login"
      label={label}
      onClick={() => handleLogin()}
      size={size}
      testId={testId}
      toolTip={toolTip}
      variant={variant}
    />
  );
}
