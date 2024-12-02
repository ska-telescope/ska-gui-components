import React from 'react';
import { useMsal } from '@azure/msal-react';
import { OurButton, ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';

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

export function ButtonLogout({
  ariaDescription = 'Logout Button',
  color = ButtonColorTypes.Success,
  component = 'button',
  disabled = false,
  label,
  size = ButtonSizeTypes.Medium,
  testId = 'logoutButtton-' + label,
  toolTip = '',
  variant = ButtonVariantTypes.Contained,
}: ButtonLogoutProps): JSX.Element {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: '/',
    });
  };

  return (
    <OurButton
      ariaDescription={ariaDescription}
      color={color}
      component={component}
      disabled={disabled}
      icon="logout"
      label={label}
      onClick={() => handleLogout()}
      size={size}
      testId={testId}
      toolTip={toolTip}
      variant={variant}
    />
  );
}
