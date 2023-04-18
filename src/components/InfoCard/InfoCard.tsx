import React from 'react';
import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Status } from '@ska-telescope/ska-javascript-components';

const SEVERITY = ['success', 'error', 'warning', 'warning', 'warning', 'info'];

export interface InfoCardProps {
  level: number;
  message: string;
  fontSize?: number;
  filled?: boolean;
  clickFunction?: Function;
}

InfoCard.defaultProps = {
  level: 1,
  fontSize: 35,
  filled: false,
  clickFunction: 'undefined',
};

const translate = (inValue: string): string => {
  const { t } = useTranslation();
  return t(inValue);
};

export function InfoCard({ level, message, fontSize, filled, clickFunction }: InfoCardProps) {
  const buttonClick = () => (typeof clickFunction !== 'undefined' ? clickFunction : null);
  const statusSize = () => (typeof fontSize !== 'undefined' ? fontSize * 1.15 : fontSize);

  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Alert
        variant={filled ? 'filled' : 'outlined'}
        icon={false}
        severity={SEVERITY[level]}
        onClick={buttonClick}
      >
        <Stack direction="row" spacing={1}>
          {level > 0 && level < 6 && (
            <Box m={1}>
              <Status level={level} size={statusSize()} />
            </Box>
          )}
          {message && message.length && (
            <Typography sx={{ fontSize: { fontSize }, display: 'flex', justifyContent: 'center' }}>
              {translate(message)}
            </Typography>
          )}
        </Stack>
      </Alert>
    </Paper>
  );
}

export default InfoCard;
