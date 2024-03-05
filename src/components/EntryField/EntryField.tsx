import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel, Typography } from '@mui/material';

export enum POSITION {
  CONTAINED = 'contained',
  START = 'start',
  TOP = 'top',
  BOTTOM = 'bottom',
  END = 'end',
}

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export enum TYPE {
  DATE = 'date',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEXT = 'text',
}

export interface EntryFieldProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  labelPosition?: POSITION;
  labelWidth?: number;
  password?: boolean;
  prefix?: JSX.Element | string;
  onFocus?: Function;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  type?: TYPE.DATE | TYPE.NUMBER | TYPE.PASSWORD | TYPE.TEXT;
}

export function EntryField({
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition = POSITION.CONTAINED,
  labelWidth = 4,
  onFocus,
  prefix = '',
  required = false,
  rows = 1,
  setValue,
  suffix = '',
  testId,
  type = TYPE.TEXT,
  value,
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ? suffix : '';
  const thePrefix = prefix ? prefix : '';
  const displayLabel = label + (required ? ' *' : '');

  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));
  return (
    <>
      {(labelPosition === POSITION.START || labelPosition === POSITION.END) && (
        <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
          {labelPosition === POSITION.START && (
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
              aria-hidden={false}
              color="secondary"
              data-testid={testId}
              disabled={disabled}
              error={errorText && errorText.length > 0 ? true : false}
              onFocus={onFocus}
              fullWidth
              helperText={errorText ? errorText : helperText ? helperText : ''}
              hiddenLabel
              id={testId}
              InputProps={{
                startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
              }}
              margin="none"
              minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
              maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
              multiline={type === TYPE.TEXT && rows && rows > 1}
              name={'textField' + label}
              onChange={(e: { target: { value: any } }) => {
                updateValue(e.target.value);
              }}
              value={value}
              variant="standard"
              required={required}
              type={type}
            />
          </Grid>
          {labelPosition === POSITION.END && (
            <Grid item xs={labelWidth}>
              <InputLabel shrink={false} htmlFor={'username'}>
                <Typography>{displayLabel}</Typography>
              </InputLabel>
            </Grid>
          )}
        </Grid>
      )}

      {(labelPosition === POSITION.TOP || labelPosition === POSITION.BOTTOM) && (
        <FormControl component="fieldset">
          <FormControlLabel
            disabled={disabled}
            labelPlacement={labelPosition}
            label={label}
            control={
              <TextField
                aria-label={ariaTitle}
                aria-describedby={ariaDescription}
                aria-hidden={false}
                color="secondary"
                data-testid={testId}
                disabled={disabled}
                error={errorText && errorText.length > 0 ? true : false}
                onFocus={onFocus}
                fullWidth
                helperText={errorText ? errorText : helperText ? helperText : ''}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                  endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
                }}
                margin="none"
                minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                multiline={type === TYPE.TEXT && rows && rows > 1}
                name={'textField' + label}
                onChange={(e: { target: { value: any } }) => {
                  updateValue(e.target.value);
                }}
                value={value}
                variant="standard"
                required={required}
                type={type}
              />
            }
          />
        </FormControl>
      )}

      {labelPosition === POSITION.CONTAINED && (
        <TextField
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          color="secondary"
          data-testid={testId}
          disabled={disabled}
          error={errorText && errorText.length > 0 ? true : false}
          onFocus={onFocus}
          fullWidth
          helperText={errorText ? errorText : helperText ? helperText : ''}
          InputProps={{
            startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
            endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
          }}
          label={label}
          margin="normal"
          minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
          maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
          multiline={type === TYPE.TEXT && rows && rows > 1}
          name={'textField' + label}
          onChange={(e: { target: { value: any } }) => {
            updateValue(e.target.value);
          }}
          value={value}
          variant="standard"
          required={required}
          type={type}
        />
      )}
    </>
  );
}

export default EntryField;
