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
const SEVERITY = ['success', 'error', '', 'warning', '', 'info'];

export interface DummyProps {
  title: string;
  filled?: boolean;
  array: { level: number; title: string; value: number; hideValue: boolean }[];
  clickFunction?: Function;
}

const content = (level: number, theTitle: string, value: number, hideValue: boolean) => (
  <Grid
    sx={{ minWidth: '120px' }}
    container
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
  >
    <Grid item>
      <Status level={level} size={STATE_SIZE} />
      <Typography variant="body2" component="div">
        {theTitle}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h3" component="div">
        {hideValue ? '' : value}
      </Typography>
    </Grid>
  </Grid>
);

function AlertFilled(
  index: number,
  level: number,
  title: string,
  value: number,
  hideValue: boolean,
  clickFunction?: Function
) {
  const buttonClick = () => (typeof clickFunction !== 'undefined' ? clickFunction : null);

  return (
    <Box key={`AlertFilledBox${index}`} m={1}>
      <Button key={`AlertFilledButton${index}`} onClick={buttonClick}>
        <Alert key={`AlertFilled${index}`} icon={false} severity={SEVERITY[level]}>
          <Box key={`AlertFilledBoxInner${index}`} m={1}>
            {content(level, title, value, hideValue)}
          </Box>
        </Alert>
      </Button>
    </Box>
  );
}

function AlertOutlined(
  index: number,
  level: number,
  title: string,
  value: number,
  hideValue: boolean,
  clickFunction?: Function
) {
  const buttonClick = () => (typeof clickFunction !== 'undefined' ? clickFunction : null);

  return (
    <Box key={`AlertOutlinedBox${index}`} m={1}>
      <Button key={`AlertOutlinedButton${index}`} onClick={buttonClick}>
        <Card key={`AlertOutlined${index}`} variant="outlined">
          <CardContent>{content(level, title, value, hideValue)}</CardContent>
        </Card>
      </Button>
    </Box>
  );
}

export function Dummy({ title, filled, array, clickFunction }: DummyProps) {
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
              {filled &&
                array.map((arr, index) =>
                  AlertOutlined(
                    index,
                    arr.level,
                    arr.title,
                    arr.value,
                    arr.hideValue,
                    clickFunction
                  )
                )}
              {!filled &&
                array.map((arr, index) =>
                  AlertFilled(index, arr.level, arr.title, arr.value, arr.hideValue, clickFunction)
                )}
            </Grid>
          </Stack>
        </Alert>
      </Paper>
    </Box>
  );
}

Dummy.defaultProps = {
  filled: false,
  clickFunction: 'undefined',
};

export default Dummy;
