import React from 'react';
import { Tooltip, IconButton } from '@mui/material';

export interface IconButtonProps {
  ariaDescription?: string;
  ariaTitle?: string;
  icon: JSX.Element;
  clickFunction?: Function;
  testId: string;
  toolTip?: string;
}

export function OurIconButton({
  ariaDescription = 'Icon button providing some functionality',
  ariaTitle = 'IconButton',
  clickFunction,
  icon,
  testId,
  toolTip,
}: IconButtonProps) {
  const buttonClick = () => (clickFunction ? clickFunction : null);

  return (
    <Tooltip testid={testId} title={toolTip} arrow>
      <IconButton
        aria-description={ariaDescription}
        aria-label={ariaTitle}
        clickFunction={buttonClick}
        style={{ cursor: 'pointer' }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default OurIconButton;
