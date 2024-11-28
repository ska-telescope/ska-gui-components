import React from 'react';
import { Alert, Box, Paper } from '@mui/material';

export enum AlertColorTypes {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}
export enum AlertVariantTypes {
  Filled = 'filled',
  Outlined = 'outlined',
}

export interface AlertProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  color?: AlertColorTypes;
  children?: JSX.Element;
  variant?: AlertVariantTypes;
  testId: string;
}
export function SKAOAlert({
  action,
  ariaDescription = 'Panel that is colored dependant upon the provided status',
  ariaTitle = 'Alert',
  children,
  color = AlertColorTypes.Success,
  variant = AlertVariantTypes.Outlined,
  testId = 'alert-testId',
}: AlertProps) {
  return (
    <Box m={1}>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.contrastText',
          height: '100%',
          minWidth: '60px',
        }}
      >
        <Alert
          action={action}
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          data-testid={testId}
          icon={false}
          key="alerts"
          severity={color}
          variant={variant}
        >
          {children}
        </Alert>
      </Paper>
    </Box>
  );
}

export default SKAOAlert;
