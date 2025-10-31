import React from 'react';
import { FormControl, FormLabel, Box, SxProps, Theme, useTheme } from '@mui/material';

export interface BorderedSectionProps {
  bold?: boolean;
  title?: string;
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

  return (
    <FormControl
      aria-labelledby={`${testId}-label`}
      component="fieldset"
      className={className}
      data-testid={testId}
      sx={{
        backgroundColor,
        border: dashed ? '1px dashed' : '1px solid',
        borderColor,
        borderRadius,
        padding,
        marginBottom: 2,
        position: 'relative',
        boxShadow: elevation ? theme.shadows[elevation] : 'none',
        ...sx,
      }}
    >
      {title && (
        <FormLabel
          component="legend"
          data-testid={`${testId}-label`}
          sx={{
            position: 'absolute',
            top: theme.spacing(-2),
            left: theme.spacing(2),
            backgroundColor,
            paddingX: 1,
            color: borderColor,
            fontWeight: bold ? 'bold' : 'normal',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            animation: 'slideIn 0.4s ease-out',
            '@keyframes slideIn': {
              from: { transform: 'translateX(-10px)', opacity: 0 },
              to: { transform: 'translateX(0)', opacity: 1 },
            },
          }}
        >
          {!iconAfter && icon}
          {title}
          {iconAfter && icon}
        </FormLabel>
      )}
      <Box mt={title ? 2 : 0}>{children}</Box>
    </FormControl>
  );
};

export default BorderedSection;
