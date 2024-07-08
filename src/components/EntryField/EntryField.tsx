import React, { FocusEventHandler } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel, Typography } from '@mui/material';

export enum LABEL_POSITION {
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
  height?: number;
  helperText?: string;
  inputRef?: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onFocus?: Function;
  password?: boolean;
  prefix?: JSX.Element | string;
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
  height = 45,
  helperText = '',
  inputRef = '',
  label,
  labelBold = false,
  labelPosition = LABEL_POSITION.CONTAINED,
  labelWidth = 4,
  name = '',
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
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));
  const displayLabel = label + (required ? ' *' : '');

  return (
    <>
      {(labelPosition === LABEL_POSITION.START || labelPosition === LABEL_POSITION.END) && (
        <Grid
          alignItems="baseline"
          container
          direction="row"
          justifyContent="space-between"
          sx={{ height: height, width: '100%' }}
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
            <TextField
              aria-label={ariaTitle}
              aria-describedby={ariaDescription}
              aria-hidden={false}
              color="secondary"
              data-testid={testId}
              disabled={disabled}
              error={errorText && errorText.length > 0 ? true : false}
              fullWidth
              helperText={errorText ? errorText : helperText ? helperText : ''}
              hiddenLabel
              id={testId}
              InputProps={{
                startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
              }}
              inputRef={() => inputRef}
              margin="none"
              minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
              maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
              multiline={type === TYPE.TEXT && rows && rows > 1 ? true : false}
              name={name}
              onChange={(e: { target: { value: any } }) => {
                updateValue(e.target.value);
              }}
              onFocus={onFocus as FocusEventHandler}
              required={required}
              select={select}
              value={value}
              variant="standard"
              type={type}
            >
              {children}
            </TextField>
          </Grid>
          {labelPosition === LABEL_POSITION.END && (
            <Grid item xs={labelWidth}>
              <InputLabel shrink={false} htmlFor={testId}>
                <Typography sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}>
                  {displayLabel}
                </Typography>
              </InputLabel>
            </Grid>
          )}
        </Grid>
      )}

      {(labelPosition === LABEL_POSITION.TOP || labelPosition === LABEL_POSITION.BOTTOM) && (
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
                onFocus={onFocus as FocusEventHandler}
                fullWidth
                helperText={errorText ? errorText : helperText ? helperText : ''}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                  endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
                }}
                inputRef={() => inputRef}
                margin="none"
                minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                multiline={type === TYPE.TEXT && rows && rows > 1 ? true : false}
                name={name}
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

      {labelPosition === LABEL_POSITION.CONTAINED && (
        <TextField
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          color="secondary"
          data-testid={testId}
          disabled={disabled}
          error={errorText && errorText.length > 0 ? true : false}
          onFocus={onFocus as FocusEventHandler}
          fullWidth
          helperText={errorText ? errorText : helperText ? helperText : ''}
          InputProps={{
            startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
            endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
          }}
          inputRef={() => inputRef}
          label={label}
          margin="normal"
          minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
          maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
          multiline={type === TYPE.TEXT && rows && rows > 1 ? true : false}
          name={name}
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
