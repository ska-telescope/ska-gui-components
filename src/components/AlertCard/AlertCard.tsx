import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { StatusIcon } from '../StatusIcon/StatusIcon';
import { SKAOAlert as Alert, AlertColorTypes, AlertVariantTypes } from '../Alert/Alert';

const STATE_SIZE = 30;

export interface AlertCardProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  array: {
    color: AlertColorTypes;
    title: string;
    variant: AlertVariantTypes;
    value: number;
    hideValue: boolean;
  }[];
  clickFunction?: Function;
  variant?: AlertVariantTypes;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId: string;
  title?: string;
}

function getLevel(color: AlertColorTypes): number {
  switch (color) {
    case AlertColorTypes.Success:
      return 0;
    case AlertColorTypes.Error:
      return 1;
    case AlertColorTypes.Warning:
      return 2;
    case AlertColorTypes.Info:
      return 4;
    default:
      return 9;
  }
}

// ORDERING - Error, Warning, Info, Success
function getCardColor(arr: any[]): AlertColorTypes {
  let result = AlertColorTypes.Success;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].color === AlertColorTypes.Error) {
      result = AlertColorTypes.Error;
      i = arr.length;
    } else if (result === AlertColorTypes.Success) {
      result = arr[i].color;
    } else if (result === AlertColorTypes.Info && arr[i].color === AlertColorTypes.Warning) {
      result = arr[i].color;
    }
  }
  return result;
}

const content = (
  hideValue: boolean,
  color: AlertColorTypes,
  showStatus: boolean,
  showStatusIcon: boolean,
  theTitle: string,
  value: number
) => (
  <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
    <Grid item>
      {showStatus && (
        <StatusIcon
          icon={showStatusIcon}
          level={getLevel(color)}
          size={STATE_SIZE}
          testId="testId"
        />
      )}
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
  color: AlertColorTypes,
  hideValue: boolean,
  index: number,
  testId: string,
  title: string,
  value: number,
  variant: AlertVariantTypes,
  // optional
  showStatus: boolean,
  showStatusIcon: boolean,
  clickFunction?: Function
) {
  const buttonClick = () => (clickFunction ? clickFunction : null);

  return (
    <Box key={`AlertFilledBox${index}`}>
      <Button key={`AlertFilledButton${index}`} onClick={buttonClick}>
        <Alert
          data-testid={testId + 'Element'}
          key={`AlertFilled${index}`}
          color={color}
          testId={testId}
          variant={variant}
        >
          <Box key={`AlertFilledBoxInner${index}`} m={1}>
            {content(hideValue, color, showStatus, showStatusIcon, title, value)}
          </Box>
        </Alert>
      </Button>
    </Box>
  );
}

export function AlertCard({
  action,
  ariaDescription = 'Panel that is colored dependant upon the most-urgent status valued element provided',
  ariaTitle = 'AlertCard',
  array,
  clickFunction,
  showStatus = true,
  showStatusIcon = true,
  testId,
  title = '',
  variant = AlertVariantTypes.Outlined,
}: AlertCardProps) {
  return (
    <Alert
      action={action}
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      color={getCardColor(array)}
      testId={testId}
      key="alerts"
      variant={variant}
    >
      <Stack sx={{ height: '95%' }} spacing={2}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
          {array.map((arr, index) =>
            AlertElement(
              arr.color,
              arr.hideValue,
              index,
              testId + index,
              arr.title,
              arr.value,
              arr.variant,
              showStatus,
              showStatusIcon,
              clickFunction
            )
          )}
        </Grid>
      </Stack>
    </Alert>
  );
}

export default AlertCard;
