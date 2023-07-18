import React from 'react';
import { Button, Tooltip } from '@mui/material';

export interface ButtonProps {
  color?: 'error' | 'inherit' | 'secondary' | 'success' | 'warning';
  disabled?: boolean;
  icon?: JSX.Element;
  label: string;
  onClick?: Function;
  toolTip?: string;
  variant?: 'contained' | 'outlined' | 'text';
}

export function SKAOButton({
  color,
  disabled,
  icon,
  label,
  onClick,
  toolTip,
  variant,
}: ButtonProps): JSX.Element {
  const clicked = (e: any) => (typeof onClick !== 'undefined' ? onClick(e) : null);

  return (
    <Tooltip title={toolTip} arrow>
      <Button
        data-testid={label + 'Id'}
        role="button"
        type="submit"
        aria-label={label}
        fullWidth
        color={color}
        disabled={disabled}
        sx={{ mt: 3, mb: 2 }}
        onClick={(e: any) => clicked(e)}
        startIcon={icon}
        variant={variant}
      >
        {label}
      </Button>
    </Tooltip>
  );
}

SKAOButton.defaultProps = {
  color: 'success',
  disabled: false,
  icon: null,
  toolTip: '',
  variant: 'outlined',
};

export default SKAOButton;
