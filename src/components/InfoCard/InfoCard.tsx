import React from 'react';
import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import { StatusIcon } from '../StatusIcon/StatusIcon';

export enum InfoCardColorTypes {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}
export enum InfoCardVariantTypes {
  Filled = 'filled',
  Outlined = 'outlined',
}
export interface InfoCardProps {
  ariaDescription?: string;
  ariaTitle?: string;
  clickFunction?: Function;
  color?: InfoCardColorTypes;
  fontSize?: number;
  maxHeight?: string;
  message: string;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId: string;
  variant?: InfoCardVariantTypes;
}

export function InfoCard({
  ariaDescription = 'Card containing information',
  ariaTitle = 'InfoCard',
  clickFunction,
  color = InfoCardColorTypes.Info,
  fontSize = 35,
  maxHeight = '100vh',
  message,
  showStatus = false,
  showStatusIcon = true,
  testId,
  variant = InfoCardVariantTypes.Outlined,
}: InfoCardProps) {
  const buttonClick = () => (clickFunction ? clickFunction : null);
  const statusSize = () => fontSize * 1.15;

  function getLevel(color: InfoCardColorTypes): number {
    switch (color) {
      case InfoCardColorTypes.Success:
        return 0;
      case InfoCardColorTypes.Error:
        return 1;
      case InfoCardColorTypes.Warning:
        return 2;
      case InfoCardColorTypes.Info:
      default:
        return 4;
    }
  }

  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Alert
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        data-testid={testId}
        variant={variant}
        icon={false}
        severity={color}
        onClick={buttonClick}
      >
        <Stack alignItems="center" direction="row" justifyContent="center" spacing={1}>
          {showStatus && (
            <Box m={1}>
              <StatusIcon
                level={getLevel(color)}
                icon={showStatusIcon}
                size={statusSize()}
                testId={testId + 'Status'}
              />
            </Box>
          )}
          {message && message.length && (
            <Typography
              sx={{
                fontSize: { fontSize },
                display: 'flex',
                justifyContent: 'center',
                overflowY: 'scroll',
                maxHeight: { maxHeight },
              }}
            >
              {message}
            </Typography>
          )}
        </Stack>
      </Alert>
    </Paper>
  );
}

export default InfoCard;
