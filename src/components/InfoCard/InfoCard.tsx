/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { JSX } from 'react';
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
  minHeight?: string;
  message?: string;
  children?: JSX.Element;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId?: string;
  variant?: InfoCardVariantTypes;
}

export function InfoCard({
  ariaDescription = 'Card containing information',
  ariaTitle = 'InfoCard',
  clickFunction,
  color = InfoCardColorTypes.Info,
  fontSize = 35,
  maxHeight = '100vh',
  minHeight = '50px',
  message = '',
  children,
  showStatus = false,
  showStatusIcon = true,
  testId = 'infoCard-testId',
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
            <Box
              component="div"
              sx={{
                overflow: 'auto',
                minHeight: { minHeight },
                maxHeight: { maxHeight },
                whiteSpace: 'normal',
              }}
            >
              <Typography
                sx={{
                  fontSize: { fontSize },
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {message}
              </Typography>
            </Box>
          )}
          {children}
        </Stack>
      </Alert>
    </Paper>
  );
}

export default InfoCard;
