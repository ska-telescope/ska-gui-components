import React from 'react';
import { Button, Tooltip } from '@mui/material';

export enum ButtonColorTypes {
  Error = 'error',
  Inherit = 'inherit',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

export enum ButtonSizeTypes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonVariantTypes {
  Contained = 'contained',
  Outlined = 'outlined',
  Text = 'text',
}
export interface ButtonProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  component?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  label: string;
  onClick?: Function;
  size?: ButtonSizeTypes;
  testId: string;
  toolTip?: string;
  variant?: ButtonVariantTypes;
}

export function SKAOButton({
  ariaDescription = 'Button',
  color = ButtonColorTypes.Success,
  component = 'Button',
  disabled = false,
  icon,
  label,
  onClick,
  size = ButtonSizeTypes.Medium,
  testId,
  toolTip = '',
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
          component={component}
          data-testid={testId}
          disabled={disabled}
          onClick={(e: any) => clicked(e)}
          role="button"
          size={size}
          startIcon={icon}
          type="submit"
          variant={variant}
        >
          {label}
        </Button>
      </span>
    </Tooltip>
  );
}

export default SKAOButton;
