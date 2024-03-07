import React from 'react';
import { FormControl, FormControlLabel, Grid, MenuItem, TextField } from '@mui/material';
import { LABEL_POSITION } from '../EntryField/EntryField';
import { InputLabel, Typography } from '@mui/material';

export interface DropDownProps {
  // required
  options: { label: string; value: string | number }[];
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  label: string;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
}

export function DropDown({
  ariaDescription = 'Selection of a value from a list of possible values',
  ariaTitle = 'DropDown',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition = LABEL_POSITION.CONTAINED,
  labelWidth = 4,
  onFocus,
  options,
  required = false,
  setValue,
  testId,
  value,
}: DropDownProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));
  const displayLabel = label + (required ? ' *' : '');

  return (
    <>
      {(labelPosition === LABEL_POSITION.TOP || labelPosition === LABEL_POSITION.BOTTOM) && (
        <FormControl sx={{ width: '100%' }} component="fieldset">
          <FormControlLabel
            disabled={disabled}
            labelPlacement={labelPosition}
            label={label}
            control={
              <TextField
                aria-label={ariaTitle}
                aria-describedby={ariaDescription}
                color="secondary"
                data-testid={testId}
                disabled={disabled}
                error={errorText && errorText.length > 0 ? true : false}
                fullWidth
                helperText={errorText ? errorText : helperText ? helperText : ''}
                id={'dropDown' + label + 'Id'}
                label=""
                name={'dropDown' + label}
                onChange={(e: { target: { value: string | number } }) => {
                  updateValue(e.target.value);
                }}
                onFocus={onFocus}
                required={required}
                select
                value={value}
                variant="standard"
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
          />
        </FormControl>
      )}

      {(labelPosition === LABEL_POSITION.START || labelPosition === LABEL_POSITION.END) && (
        <Grid
          container
          sx={{ width: '100%' }}
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          {labelPosition === LABEL_POSITION.START && (
            <Grid item xs={labelWidth}>
              <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
                <Typography>{displayLabel}</Typography>
              </InputLabel>
            </Grid>
          )}
          <Grid item xs={12 - labelWidth}>
            <TextField
              aria-label={ariaTitle}
              aria-describedby={ariaDescription}
              color="secondary"
              data-testid={testId}
              disabled={disabled}
              error={errorText && errorText.length > 0 ? true : false}
              fullWidth
              helperText={errorText ? errorText : helperText ? helperText : ''}
              id={'dropDown' + label + 'Id'}
              label=""
              name={'dropDown' + label}
              onChange={(e: { target: { value: string | number } }) => {
                updateValue(e.target.value);
              }}
              onFocus={onFocus}
              required={required}
              select
              value={value}
              variant="standard"
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {labelPosition === LABEL_POSITION.END && (
            <Grid item xs={labelWidth}>
              <InputLabel shrink={false} htmlFor={'username'}>
                <Typography>{displayLabel}</Typography>
              </InputLabel>
            </Grid>
          )}
        </Grid>
      )}

      {labelPosition === LABEL_POSITION.CONTAINED && (
        <TextField
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          color="secondary"
          data-testid={testId}
          disabled={disabled}
          error={errorText && errorText.length > 0 ? true : false}
          fullWidth
          helperText={errorText ? errorText : helperText ? helperText : ''}
          id={'dropDown' + label + 'Id'}
          label={label}
          name={'dropDown' + label}
          onChange={(e: { target: { value: string | number } }) => {
            updateValue(e.target.value);
          }}
          onFocus={onFocus}
          required={required}
          select
          sx={{ width: '100%' }}
          value={value}
          variant="standard"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </>
  );
}

export default DropDown;
