import React from 'react';
import { useMsal } from '@azure/msal-react';
import Button, { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';
import { loginRequest } from '../../services/authentication/authConfig';

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

export function ButtonLogin({
  ariaDescription = 'Login Button',
  color = ButtonColorTypes.Success,
  component = 'button',
  disabled = false,
  icon = 'login',
  label,
  onError,
  size = ButtonSizeTypes.Medium,
  testId = 'loginButton',
  toolTip = '',
  variant = ButtonVariantTypes.Contained,
}: ButtonLoginProps): JSX.Element {
  const { instance } = useMsal();

  function handleLogin() {
    instance.loginRedirect(loginRequest).catch((e) => {
      onError ? onError(e) : null;
    });
  }

  return (
    <Button
      ariaDescription={ariaDescription}
      color={color}
      component={component}
      disabled={disabled}
      icon={icon}
      label={label}
      onClick={() => handleLogin()}
      size={size}
      testId={testId}
      toolTip={toolTip}
      variant={variant}
    />
  );
}
