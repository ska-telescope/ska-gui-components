import React from 'react';
import { Tooltip, IconButton } from '@mui/material';

export interface IconButtonProps {
  ariaDescription?: string;
  ariaTitle?: string;
  icon: JSX.Element;
  onClick?: Function;
  testId: string;
  toolTip?: string;
}

export function OurIconButton({
  ariaDescription = 'Icon button providing some functionality',
  ariaTitle = 'IconButton',
  onClick,
  icon,
  testId,
  toolTip,
}: IconButtonProps) {
  const buttonClick = () => (onClick ? onClick : null);

  return (
    <Tooltip testid={testId} title={toolTip} arrow>
      <IconButton
        aria-description={ariaDescription}
        aria-label={ariaTitle}
        onClick={buttonClick}
        style={{ cursor: 'pointer' }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default OurIconButton;
