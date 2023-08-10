import React from 'react';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { Status } from '@ska-telescope/ska-javascript-components';
import { SKAOAlert as Alert } from '../Alert/Alert';

const STATE_SIZE = 30;

export interface AlertCardProps {
  ariaDescription?: string;
  ariaTitle?: string;
  array: { level: number; title: string; filled: boolean; value: number; hideValue: boolean }[];
  clickFunction?: Function;
  filled?: boolean;
  testId: string;
  title: string;
}

const content = (hideValue: boolean, level: number, theTitle: string, value: number) => (
  <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
    <Grid item>
      <Status level={level} size={STATE_SIZE} testId="testId" />
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
  filled: boolean,
  hideValue: boolean,
  index: number,
  level: number,
  testId: string,
  title: string,
  value: number,
  // optional
  clickFunction?: Function
) {
  const buttonClick = () => (typeof clickFunction !== 'undefined' ? clickFunction : null);

  return (
    <Box key={`AlertFilledBox${index}`}>
      <Button key={`AlertFilledButton${index}`} onClick={buttonClick}>
        <Alert
          data-testid={testId + 'Element'}
          key={`AlertFilled${index}`}
          severity={level}
          testId={testId}
          filled={filled}
        >
          <Box key={`AlertFilledBoxInner${index}`} m={1}>
            {content(hideValue, level, title, value)}
          </Box>
        </Alert>
      </Button>
    </Box>
  );
}

export function AlertCard({
  ariaDescription,
  ariaTitle,
  array,
  clickFunction,
  filled,
  testId,
  title,
}: AlertCardProps) {
  const setSeverity = () => {
    let result = 0;
    for (let i = 0; result === 0 && i < array.length; i += 1) {
      if (array[i].value > 0) {
        result = array[i].level;
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
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          aria-description={ariaDescription}
          testId={testId}
          key="alerts"
          severity={setSeverity()}
          filled={filled}
        >
          <Stack sx={{ height: '95%' }} spacing={2}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
              {array.map((arr, index) =>
                AlertElement(
                  arr.filled,
                  arr.hideValue,
                  index,
                  arr.level,
                  testId + index,
                  arr.title,
                  arr.value,
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
  ariaDescription:
    'Panel that is colored dependant upon the most-urgent status valued element provided',
  ariaTitle: 'AlertCard',
  clickFunction: 'undefined',
  filled: false,
  title: '',
};

export default AlertCard;
