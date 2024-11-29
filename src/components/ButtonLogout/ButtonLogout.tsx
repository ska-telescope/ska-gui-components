import React from 'react';
import { useMsal } from '@azure/msal-react';
import Button, { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button';

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

export function ButtonLogout({
  ariaDescription = 'Logout Button',
  color = ButtonColorTypes.Success,
  component = 'button',
  disabled = false,
  icon = 'logout',
  label,
  size = ButtonSizeTypes.Medium,
  testId = 'logoutButton',
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
    <Button
      ariaDescription={ariaDescription}
      color={color}
      component={component}
      disabled={disabled}
      icon={icon}
      label={label}
      onClick={() => handleLogout()}
      size={size}
      testId={testId}
      toolTip={toolTip}
      variant={variant}
    />
  );
}
