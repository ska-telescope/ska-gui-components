import React from 'react';
import { Box, Typography, SxProps, Theme, useTheme } from '@mui/material';

export interface BorderedSectionProps {
  bold?: boolean;
  title?: string;
  titleSize?: string;
  icon?: React.ReactNode;
  iconAfter?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  padding?: number;
  dashed?: boolean;
  elevation?: number;
  className?: string;
  sx?: SxProps<Theme>;
  testId?: string;
}

export const BorderedSection: React.FC<BorderedSectionProps> = ({
  bold = false,
  title,
  titleSize = 'h6',
  icon,
  iconAfter = false,
  children,
  backgroundColor = 'background.paper',
  borderColor = 'text.disabled',
  borderRadius = 2,
  padding = 2,
  dashed = false,
  elevation = 0,
  className,
  sx,
  testId = 'borderedSection',
}) => {
  const theme = useTheme();
  const safeElevation = Math.min(Math.max(elevation, 0), 24);

  return (
    <Box
      className={className}
      data-testid={testId}
      role="region"
      aria-label={title || undefined}
      sx={{
        backgroundColor,
        border: dashed ? '1px dashed' : '1px solid',
        borderColor,
        borderRadius,
        padding,
        marginBottom: 2,
        position: 'relative',
        boxShadow: safeElevation ? theme.shadows[safeElevation] : 'none',
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant={titleSize as any}
          data-testid={`${testId}-label`}
          sx={{
            position: 'absolute',
            top: theme.spacing(-2),
            left: theme.spacing(2),
            backgroundColor,
            px: 1,
            color: borderColor,
            fontWeight: bold ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {!iconAfter && icon}
          {title}
          {iconAfter && icon}
        </Typography>
      )}
      <Box sx={{ paddingTop: title ? theme.spacing(2) : 0 }} data-testid={`${testId}-content`}>
        {children}
      </Box>
    </Box>
  );
};

export default BorderedSection;
