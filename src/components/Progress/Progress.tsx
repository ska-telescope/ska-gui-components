import React from 'react';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import { ColorTypes, IndicatorTypes } from '../../models';

const BASE = 70;
const OFFSET = 25;

export interface ProgressProps {
  ariaDescription?: string;
  ariaTitle?: string;
  color?: string;
  determinate?: boolean;
  indicator?: IndicatorTypes;
  label?: boolean;
  modal?: boolean;
  size?: number;
  testId: string;
  value?: number;
  sx?: object;
}

export function Progress({
  ariaDescription = 'Indicates the progress of an activity',
  ariaTitle = 'Progress',
  color = ColorTypes.Secondary,
  determinate = false,
  indicator = IndicatorTypes.Circle,
  label = false,
  size = 40,
  testId,
  value = 0,
  sx = {}
}: ProgressProps): JSX.Element {
  const variantSize = (inValue: number) => {
    if (inValue < BASE) {
      return 'subtitle1';
    } else if (inValue < BASE + OFFSET) {
      return 'h6';
    } else if (inValue < BASE + OFFSET * 2) {
      return 'h5';
    } else if (inValue < BASE + OFFSET * 3) {
      return 'h4';
    } else if (inValue < BASE + OFFSET * 4) {
      return 'h3';
    } else if (inValue < BASE + OFFSET * 5) {
      return 'h2';
    } else {
      return 'h1';
    }
  };

  function ProgressCircle(
    ariaDescription: any,
    ariaTitle: any,
    color: string,
    determinate: boolean,
    label: any,
    size: number,
    testId: any,
    value: number,
    sx: object,
  ): JSX.Element {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          aria-describedby={ariaDescription}
          aria-label={ariaTitle}
          color={color}
          data-testid={testId}
          size={size}
          variant={determinate ? 'determinate' : 'indeterminate'}
          value={value}
          sx={sx}
        />
        {label && size && size > 49 && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant={variantSize(size)}
              component="div"
              color={color}
            >{`${Math.round(value ? value : 0)}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  function ProgressLine(
    ariaDescription: any,
    ariaTitle: any,
    color: string,
    determinate: boolean,
    label: any,
    size: number,
    testId: any,
    value: number,
    sx: object
  ): JSX.Element {
    return (
      <Box sx={{ width: size, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            aria-describedby={ariaDescription}
            aria-label={ariaTitle}
            color={color}
            data-testid={testId}
            variant={determinate ? 'determinate' : 'indeterminate'}
            value={value}
            sx={sx}
          />
        </Box>
        {label && (
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              value ? value : 0
            )}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  return (
    <>
      {indicator === IndicatorTypes.Circle &&
        ProgressCircle(
          ariaDescription,
          ariaTitle,
          color,
          determinate ?? false,
          label,
          size ?? 40,
          testId,
          value ?? 0,
          sx
        )}
      {indicator === IndicatorTypes.Line &&
        ProgressLine(
          ariaDescription,
          ariaTitle,
          color,
          determinate ?? false,
          label,
          size ?? 40,
          testId,
          value ?? 0,
          sx
        )}
    </>
  );
}

export default Progress;
