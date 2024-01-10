import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { ButtonVariantTypes, ColorTypes } from '../../models';

export interface ButtonProps {
  ariaDescription?: string;
  color?: ColorTypes;
  disabled?: boolean;
  icon?: JSX.Element;
  label: string;
  onClick?: Function;
  role?: string;
  testId: string;
  toolTip?: string;
  type?: string;
  variant?: ButtonVariantTypes;
  sx?: object;
}

export function SKAOButton({
  ariaDescription = 'Button',
  color = ColorTypes.Primary,
  disabled = false,
  icon,
  label,
  onClick,
  role = "button",
  testId,
  toolTip = '',
  type = 'submit',
  variant = ButtonVariantTypes.Outlined,
}: ButtonProps): JSX.Element {
  const clicked = (e: any) => (typeof onClick !== 'undefined' ? onClick(e) : null);

  return (
    <Tooltip title={toolTip} arrow>
      <span>
        <Button
          aria-label={label}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          color={color}
          data-testid={testId}
          disabled={disabled}
          onClick={(e: any) => clicked(e)}
          role={role}
          startIcon={icon}
          type={type}
          variant={variant}
        >
          {label}
        </Button>
      </span>
    </Tooltip>
  );
}

export default SKAOButton;
