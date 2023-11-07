import React from 'react';
import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import { Status } from '@ska-telescope/ska-javascript-components';

const SEVERITY = ['success', 'error', 'warning', 'warning', 'warning', 'info'];

export interface InfoCardProps {
  level: number;
  message: string;
  ariaDescription?: string;
  ariaTitle?: string;
  fontSize?: number;
  filled?: boolean;
  clickFunction?: Function;
  testId: string;
}

export function InfoCard({
  ariaDescription = 'Card containing information',
  ariaTitle = 'InfoCard',
  clickFunction,
  fontSize = 35,
  filled = false,
  level = 1,
  message,
  testId,
}: InfoCardProps) {
  const buttonClick = () => (clickFunction ? clickFunction : null);
  const statusSize = () => (fontSize ? fontSize * 1.15 : fontSize);

  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Alert
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        aria-description={ariaDescription}
        data-testid={testId}
        variant={filled ? 'filled' : 'outlined'}
        icon={false}
        severity={SEVERITY[level]}
        onClick={buttonClick}
      >
        <Stack alignItems="center" direction="row" justifyContent="center" spacing={1}>
          {level > 0 && level < 6 && (
            <Box m={1}>
              <Status level={level} size={statusSize()} testId={testId + 'Status'} />
            </Box>
          )}
          {message && message.length && (
            <Typography sx={{ fontSize: { fontSize }, display: 'flex', justifyContent: 'center' }}>
              {message}
            </Typography>
          )}
        </Stack>
      </Alert>
    </Paper>
  );
}

export default InfoCard;
