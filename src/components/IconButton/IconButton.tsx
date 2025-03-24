import React, { JSX, ReactNode } from 'react';
import { Tooltip, IconButton, PopperPlacementType } from '@mui/material';

export interface IconButtonProps {
  ariaDescription?: string;
  ariaTitle?: string;
  icon: JSX.Element;
  onClick?: Function;
  testId?: string;
  toolTipPlacement?: string;
  toolTip?: string | ReactNode | null;
}

export function OurIconButton({
  ariaDescription = 'Icon button providing some functionality',
  ariaTitle = 'IconButton',
  onClick,
  icon,
  testId = 'iconButton-testId',
  toolTip,
  toolTipPlacement = 'bottom',
}: IconButtonProps) {
  const buttonClick = (e: any) => (onClick ? onClick(e) : null);

  return (
    <Tooltip
      placement={toolTipPlacement as PopperPlacementType}
      data-testid={testId}
      title={toolTip}
      arrow
    >
      <IconButton
        aria-description={ariaDescription}
        aria-label={ariaTitle}
        onClick={(e: any) => buttonClick(e)}
        style={{ cursor: 'pointer' }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default OurIconButton;
