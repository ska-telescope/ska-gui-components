/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Badge, Box, IconButton, PopperPlacementType, Tooltip, Typography } from '@mui/material';
import { JSX, ReactNode } from 'react';

export interface IconButtonProps {
  ariaDescription?: string;
  ariaTitle?: string;
  count?: number;
  icon: JSX.Element;
  label?: string;
  onClick?: Function;
  testId?: string;
  toolTipPlacement?: string;
  toolTip?: string | ReactNode | null;
}

export function OurIconButton({
  ariaDescription = 'Icon button providing some functionality',
  ariaTitle = 'IconButton',
  count,
  onClick,
  icon,
  label = '',
  testId = 'iconButton-testId',
  toolTip,
  toolTipPlacement = 'bottom',
}: IconButtonProps) {
  const buttonClick = (e: any) => (onClick ? onClick(e) : null);

  return (
    <Box mr={1} display="flex" flexDirection="column" alignItems="center">
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
          {count !== undefined && count > 0 ? (
            <Badge badgeContent={count} color="error">
              {icon}
            </Badge>
          ) : (
            icon
          )}
        </IconButton>
      </Tooltip>
      {label && label.length > 0 && <Typography variant="caption">{label}</Typography>}
    </Box>
  );
}

export default OurIconButton;
