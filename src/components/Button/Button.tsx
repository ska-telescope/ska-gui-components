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
  ariaDescription,
  color,
  disabled,
  icon,
  label,
  onClick,
  testId,
  toolTip,
  variant,
}: ButtonProps): JSX.Element {
  const clicked = (e: any) => (typeof onClick !== 'undefined' ? onClick(e) : null);

  return (
    <Tooltip title={toolTip} arrow>
      <Button
        aria-label={label}
        aria-describedby={ariaDescription}
        aria-description={ariaDescription}
        color={color}
        data-testid={testId}
        disabled={disabled}
        fullWidth
        onClick={(e: any) => clicked(e)}
        role="button"
        startIcon={icon}
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        variant={variant}
      >
        {label}
      </Button>
    </Tooltip>
  );
}

SKAOButton.defaultProps = {
  ariaDescription: 'Button',
  color: ButtonColorTypes.Success,
  disabled: false,
  icon: null,
  toolTip: '',
  variant: ButtonVariantTypes.Outlined,
};

export default SKAOButton;
