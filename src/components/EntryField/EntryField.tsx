import React, { FocusEventHandler, JSX } from 'react';
import { InputAdornment, TextField, Tooltip } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { Grid } from '@mui/material';
import { InputLabel, Typography } from '@mui/material';
import Children from '../../utils/types/types';

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
  FILE = 'file',
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
  children?: Children;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  password?: boolean;
  prefix?: JSX.Element | string;
  required?: boolean;
  rows?: number;
  select?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  toolTip?: string;
  type?: TYPE.DATE | TYPE.FILE | TYPE.NUMBER | TYPE.PASSWORD | TYPE.TEXT;
}

export function EntryField({
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  children,
  disabled = false,
  errorText = '',
  height = 45,
  helperText = '',
  inputRef,
  label,
  labelBold = false,
  labelPosition = LABEL_POSITION.CONTAINED,
  labelWidth = 4,
  name = '',
  onBlur,
  onFocus,
  prefix = '',
  required = false,
  rows = 1,
  select = false,
  setValue,
  suffix = '',
  testId,
  toolTip = '',
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
            <Tooltip title={toolTip} arrow>
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
                inputRef={inputRef}
                margin="none"
                minRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
                multiline={type === TYPE.TEXT && rows && rows > 1 ? true : false}
                name={name}
                onChange={(e: { target: { value: any } }) => {
                  updateValue(e.target.value);
                }}
                onBlur={onBlur as FocusEventHandler}
                onFocus={onFocus as FocusEventHandler}
                required={required}
                select={select}
                value={value}
                variant="standard"
                type={type}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                    endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
                  },
                }}
              >
                {children}
              </TextField>
            </Tooltip>
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
              <Tooltip title={toolTip} arrow>
                <TextField
                  aria-label={ariaTitle}
                  aria-describedby={ariaDescription}
                  aria-hidden={false}
                  color="secondary"
                  data-testid={testId}
                  disabled={disabled}
                  error={errorText && errorText.length > 0 ? true : false}
                  onBlur={onBlur as FocusEventHandler}
                  onFocus={onFocus as FocusEventHandler}
                  fullWidth
                  helperText={errorText ? errorText : helperText ? helperText : ''}
                  inputRef={inputRef}
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
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                      endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
                    },
                  }}
                >
                  {children}
                </TextField>
              </Tooltip>
            }
          />
        </FormControl>
      )}
      {labelPosition === LABEL_POSITION.CONTAINED && (
        <Tooltip title={toolTip} arrow>
          <TextField
            aria-label={ariaTitle}
            aria-describedby={ariaDescription}
            aria-hidden={false}
            color="secondary"
            data-testid={testId}
            disabled={disabled}
            error={errorText && errorText.length > 0 ? true : false}
            onBlur={onBlur as FocusEventHandler}
            onFocus={onFocus as FocusEventHandler}
            fullWidth
            helperText={errorText ? errorText : helperText ? helperText : ''}
            inputRef={inputRef}
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
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
              },
            }}
          >
            {children}
          </TextField>
        </Tooltip>
      )}
    </>
  );
}

export default EntryField;
