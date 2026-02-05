/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from 'react';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';

const BASE = 70;
const OFFSET = 25;

export enum ProgressIndicator {
  Circle = 'circle',
  Line = 'line',
  None = 'none',
}

export interface ProgressProps {
  ariaDescription?: string;
  ariaTitle?: string;
  determinate?: boolean;
  indicator?: ProgressIndicator;
  label?: boolean;
  size?: number;
  testId?: string;
  value?: number;
}

export function Progress({
  ariaDescription = 'Indicates the progress of an activity',
  ariaTitle = 'Progress',
  determinate = false,
  indicator = ProgressIndicator.Circle,
  label = false,
  size = 40,
  testId = 'progress-testId',
  value = 0,
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
    determinate: boolean,
    label: any,
    size: number,
    testId: any,
    value: number,
  ): JSX.Element {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          aria-describedby={ariaDescription}
          aria-label={ariaTitle}
          color="secondary"
          data-testid={testId}
          size={size}
          variant={determinate ? 'determinate' : 'indeterminate'}
          value={value}
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
              color="secondary"
            >{`${Math.round(value ? value : 0)}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  function ProgressLine(
    ariaDescription: any,
    ariaTitle: any,
    determinate: boolean,
    label: any,
    size: number,
    testId: any,
    value: number,
  ): JSX.Element {
    return (
      <Box sx={{ width: size, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            aria-describedby={ariaDescription}
            aria-label={ariaTitle}
            color="secondary"
            data-testid={testId}
            variant={determinate ? 'determinate' : 'indeterminate'}
            value={value}
          />
        </Box>
        {label && (
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              value ? value : 0,
            )}%`}</Typography>
          </Box>
        )}
      </Box>
    );
  }

  return (
    <>
      {indicator === ProgressIndicator.Circle &&
        ProgressCircle(
          ariaDescription,
          ariaTitle,
          determinate ? determinate : false,
          label,
          size ? size : 40,
          testId,
          value ? value : 0,
        )}
      {indicator === ProgressIndicator.Line &&
        ProgressLine(
          ariaDescription,
          ariaTitle,
          determinate ? determinate : false,
          label,
          size ? size : 40,
          testId,
          value ? value : 0,
        )}
    </>
  );
}

export default Progress;
