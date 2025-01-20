import React from 'react';
// 
import { OurButton, ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';
// import { loginRequest } from '../../utils/authConfig';

// TODO : THIS IS ONLY HERE SO THE CODE CAN BE KEPT UNTIL IT IS TRANSFERRED TO THE CORRECT LIBRARY

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
}: ButtonLoginProps): JSX.Element {
  // const { instance } = useMsal();

  function handleLogin() {
    // instance.loginRedirect(loginRequest).catch((e) => {
    //   onError ? onError(e) : null;
    // });
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
