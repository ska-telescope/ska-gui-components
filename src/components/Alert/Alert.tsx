import React from 'react';
import { Alert, Box, Paper } from '@mui/material';

const SEVERITY = ['success', 'error', 'warning', 'warning', 'warning', 'info'];

export interface AlertProps {
  ariaDescription?: string;
  ariaTitle?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
  filled?: boolean;
  severity: number;
  testId: string;
}

export function SKAOAlert({
  ariaDescription,
  ariaTitle,
  children,
  filled,
  testId,
  severity,
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

SKAOAlert.defaultProps = {
  ariaDescription: 'Panel that is colored dependant upon the provided status',
  ariaTitle: 'Alert',
  filled: false,
  severity: 0,
};

export default SKAOAlert;
