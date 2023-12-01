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
  color: InfoCardColorTypes;
  message: string;
  ariaDescription?: string;
  ariaTitle?: string;
  fontSize?: number;
  variant?: InfoCardVariantTypes;
  clickFunction?: Function;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId: string;
}

export function InfoCard({
  ariaDescription = 'Card containing information',
  ariaTitle = 'InfoCard',
  clickFunction,
  color = InfoCardColorTypes.Info,
  fontSize = 35,
  variant = InfoCardVariantTypes.Outlined,
  message,
  showStatus = false,
  showStatusIcon = true,
  testId,
}: InfoCardProps) {
  const buttonClick = () => (clickFunction ? clickFunction : null);
  const statusSize = () => (fontSize ? fontSize * 1.15 : fontSize);

  function getLevel(color: InfoCardColorTypes): number {
    switch (color) {
      case InfoCardColorTypes.Success:
        return 0;
      case InfoCardColorTypes.Error:
        return 1;
      case InfoCardColorTypes.Warning:
        return 2;
      case InfoCardColorTypes.Info:
        return 4;
      default:
        return 9;
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
