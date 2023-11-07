import React from 'react';
import { Alert, Box, Paper } from '@mui/material';

const SEVERITY = ['success', 'error', 'warning', 'warning', 'warning', 'info'];

export interface AlertProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
  filled?: boolean;
  severity: number;
  testId: string;
}
export function SKAOAlert({
  action,
  ariaDescription = 'Panel that is colored dependant upon the provided status',
  ariaTitle = 'Alert',
  children,
  filled = false,
  testId,
  severity = 0,
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
          aria-description={ariaDescription}
          data-testid={testId}
          icon={false}
          key="alerts"
          severity={severity < SEVERITY.length ? SEVERITY[severity] : SEVERITY[0]}
          variant={filled ? 'filled' : 'outlined'}
        >
          {children}
        </Alert>
      </Paper>
    </Box>
  );
}

export default SKAOAlert;
