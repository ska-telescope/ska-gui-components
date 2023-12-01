import React from 'react';
import { Button, Tooltip } from '@mui/material';

export enum ButtonColorTypes {
  Error = 'error',
  Inherit = 'inherit',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

export enum ButtonVariantTypes {
  Contained = 'contained',
  Outlined = 'outlined',
  Text = 'text',
}
export interface ButtonProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  disabled?: boolean;
  icon?: JSX.Element;
  label: string;
  onClick?: Function;
  testId: string;
  toolTip?: string;
  variant?: ButtonVariantTypes;
}

export function SKAOButton({
  ariaDescription = 'Button',
  color = ButtonColorTypes.Success,
  disabled = false,
  icon,
  label,
  onClick,
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
          data-testid={testId}
          disabled={disabled}
          onClick={(e: any) => clicked(e)}
          role="button"
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
