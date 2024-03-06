import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel, Typography } from '@mui/material';

export enum ENTRY_LABEL_POSITION {
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
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  labelPosition?: ENTRY_LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  prefix?: JSX.Element | string;
  onFocus?: Function;
  required?: boolean;
  rows?: number;
  select?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  type?: TYPE.DATE | TYPE.NUMBER | TYPE.PASSWORD | TYPE.TEXT;
}

export function EntryField({
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  children,
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  labelPosition = ENTRY_LABEL_POSITION.CONTAINED,
  labelWidth = 4,
  onFocus,
  prefix = '',
  required = false,
  rows = 1,
  select = false,
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
      {(labelPosition === ENTRY_LABEL_POSITION.START ||
        labelPosition === ENTRY_LABEL_POSITION.END) && (
        <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
          {labelPosition === ENTRY_LABEL_POSITION.START && (
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
              select={select}
              value={value}
              variant="standard"
              required={required}
              type={type}
            >
              {children}
            </TextField>
          </Grid>
          {labelPosition === ENTRY_LABEL_POSITION.END && (
            <Grid item xs={labelWidth}>
              <InputLabel shrink={false} htmlFor={'username'}>
                <Typography>{displayLabel}</Typography>
              </InputLabel>
            </Grid>
          )}
        </Grid>
      )}

      {(labelPosition === ENTRY_LABEL_POSITION.TOP ||
        labelPosition === ENTRY_LABEL_POSITION.BOTTOM) && (
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
                select={select}
                value={value}
                variant="standard"
                required={required}
                type={type}
              >
                {children}
              </TextField>
            }
          />
        </FormControl>
      )}

      {labelPosition === ENTRY_LABEL_POSITION.CONTAINED && (
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
          select={select}
          type={type}
        >
          {children}
        </TextField>
      )}
    </>
  );
}

export default EntryField;
