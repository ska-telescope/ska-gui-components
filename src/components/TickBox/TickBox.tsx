import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';
import { LABEL_POSITION } from '../EntryField/EntryField';
import { Grid, Typography } from '@mui/material';
import { InputLabel } from '@mui/material';

export interface TickBoxProps {
  ariaDescription?: string;
  checked?: boolean;
  disabled?: boolean;
  fontSize?: number;
  label?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  onChange?: Function;
  onFocus?: Function;
  required?: Boolean;
  testId: string;
}

export function TickBox({
  ariaDescription = 'Entry of a textual value',
  checked = false,
  disabled = false,
  fontSize = 28,
  label,
  labelBold = false,
  labelPosition = LABEL_POSITION.START,
  labelWidth = 8,
  onChange,
  onFocus,
  required,
  testId,
}: TickBoxProps): JSX.Element {
  const theme = useTheme();
  const displayLabel = label + (required ? ' *' : '');

  return (
    <>
      {(labelPosition === LABEL_POSITION.CONTAINED ||
        labelPosition === LABEL_POSITION.START ||
        labelPosition === LABEL_POSITION.END) && (
        <Grid
          alignItems="baseline"
          container
          direction="row"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          {labelPosition === LABEL_POSITION.START && (
            <Grid item xs={labelWidth}>
              <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
                <Typography sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}>
                  {displayLabel}
                </Typography>
              </InputLabel>
            </Grid>
          )}
          <Grid item xs={12 - labelWidth}>
            <FormControlLabel
              aria-description={ariaDescription}
              checked={checked}
              disabled={disabled}
              id={testId}
              data-testid={testId}
              label={displayLabel}
              onChange={() => onChange}
              onFocus={() => onFocus}
              control={
                <Checkbox
                  sx={{
                    '&.Mui-checked': {
                      color: theme.palette.secondary.main,
                      '&.Mui-disabled': {
                        color: theme.palette.primary.dark,
                      },
                    },
                  }}
                />
              }
              sx={{ '& .MuiSvgIcon-root': { fontSize: { fontSize } } }}
            />
          </Grid>
          {labelPosition === LABEL_POSITION.END && (
            <Grid item xs={labelWidth}>
              <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
                <Typography sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}>
                  {displayLabel}
                </Typography>
              </InputLabel>
            </Grid>
          )}
        </Grid>
      )}
      {(labelPosition === LABEL_POSITION.TOP || labelPosition === LABEL_POSITION.BOTTOM) && (
        <FormControlLabel
          aria-description={ariaDescription}
          checked={checked}
          data-testid={testId}
          disabled={disabled}
          onChange={() => onChange}
          onFocus={() => onFocus}
          control={
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: theme.palette.secondary.main,
                  '&.Mui-disabled': {
                    color: theme.palette.primary.dark,
                  },
                },
              }}
            />
          }
          label={displayLabel}
          labelPlacement={labelPosition}
          sx={{ '& .MuiSvgIcon-root': { fontSize: { fontSize } } }}
        />
      )}
    </>
  );
}

export default TickBox;
