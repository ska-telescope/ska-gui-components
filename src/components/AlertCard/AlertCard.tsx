import React from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Status } from '@ska-telescope/ska-javascript-components';

const STATE_SIZE = 30;
const SEVERITY = ['success', 'error', 'warning', 'warning', 'warning', 'info'];

export interface AlertCardProps {
  title: string;
  filled?: boolean;
  array: { level: number; title: string; filled: boolean; value: number; hideValue: boolean }[];
  clickFunction?: Function;
}

const content = (level: number, theTitle: string, value: number, hideValue: boolean) => (
  <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
    <Grid item>
      <Status level={level} size={STATE_SIZE} />
      <Typography variant="body2" component="div">
        {theTitle}
      </Typography>
    </Grid>
    {!hideValue && (
      <Grid item>
        <Typography variant="h3" component="div">
          {value}
        </Typography>
      </Grid>
    )}
  </Grid>
);

function AlertElement(
  index: number,
  level: number,
  title: string,
  filled: boolean,
  value: number,
  hideValue: boolean,
  clickFunction?: Function
) {
  const buttonClick = () => (typeof clickFunction !== 'undefined' ? clickFunction : null);

  return (
    <Box key={`AlertFilledBox${index}`}>
      <Button key={`AlertFilledButton${index}`} onClick={buttonClick}>
        <Alert
          key={`AlertFilled${index}`}
          icon={false}
          severity={SEVERITY[level]}
          variant={filled ? 'filled' : 'outlined'}
        >
          <Box key={`AlertFilledBoxInner${index}`} m={1}>
            {content(level, title, value, hideValue)}
          </Box>
        </Alert>
      </Button>
    </Box>
  );
}

export function AlertCard({ title, filled, array, clickFunction }: AlertCardProps) {
  const setSeverity = () => {
    let result = SEVERITY[0];
    for (let i = 0; result === SEVERITY[0] && i < array.length; i += 1) {
      if (array[i].value > 0) {
        result = SEVERITY[array[i].level];
      }
    }
    return result;
  };

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
          key="alerts"
          variant={filled ? 'filled' : 'outlined'}
          icon={false}
          severity={setSeverity()}
        >
          <Stack sx={{ height: '95%' }} spacing={2}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
              {array.map((arr, index) =>
                AlertElement(
                  index,
                  arr.level,
                  arr.title,
                  arr.filled,
                  arr.value,
                  arr.hideValue,
                  clickFunction
                )
              )}
            </Grid>
          </Stack>
        </Alert>
      </Paper>
    </Box>
  );
}

AlertCard.defaultProps = {
  filled: false,
  clickFunction: 'undefined',
};

export default AlertCard;
