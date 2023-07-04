import React from 'react';
import { CssBaseline, InputAdornment, Grid, TextField } from '@mui/material';
import { Status } from '@ska-telescope/ska-javascript-components';

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export enum TYPE {
  DATE = 'date',
  NUMBER = 'number',
  TEXT = 'text',
}

export interface EntryFieldProps {
  // required
  label: string;
  value: string | number;
  // optional
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: string;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: string;
  type?: TYPE.DATE | TYPE.NUMBER | TYPE.TEXT;
  validationState?: STATE.OK | STATE.ERROR | STATE.UNKNOWN | STATE.NONE;
}

export function EntryField({
  label,
  setValue,
  value,
  helperText,
  disabled,
  errorText,
  prefix,
  required,
  rows,
  suffix,
  type,
  validationState,
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ? suffix : '';
  const thePrefix = prefix ? prefix : '';
  const updateValue = (e: any) => (typeof setValue !== 'undefined' ? setValue(e) : null);

  const hasError = () => {
    return errorText ? 1 : 0;
  };

  const level = () => {
    switch (validationState) {
      case STATE.OK:
        return hasError();
      case STATE.ERROR:
        return 1;
      case STATE.UNKNOWN:
        return hasError() ? 1 : 3;
      default:
        return 9;
    }
  };

  const STATE_SIZE = 20;

  return (
    <>
      <CssBaseline enableColorScheme />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            id={'textField' + label + 'Id'}
            disabled={disabled}
            error={errorText && errorText.length > 0}
            fullWidth
            helperText={errorText ? errorText : helperText ? helperText : ''}
            InputProps={{
              startAdornment: <InputAdornment position="start">{thePrefix}</InputAdornment>,
              endAdornment: <InputAdornment position="end">{theSuffix}</InputAdornment>,
            }}
            label={label}
            margin="normal"
            minRows="1"
            maxRows={type !== TYPE.TEXT || !rows ? 1 : rows}
            multiline={type === TYPE.TEXT && rows && rows > 1}
            name={'textField' + label}
            onChange={(e: { target: { value: any } }) => {
              updateValue(e.target.value);
            }}
            value={value}
            variant="outlined"
            required={required}
            type={type}
          />
        </Grid>
        <Grid item>
          <Status level={level()} size={STATE_SIZE} />
        </Grid>
      </Grid>
    </>
  );
}

//type="password"
//autoComplete="current-password"

EntryField.defaultProps = {
  disabled: false,
  error: false,
  helperText: '',
  password: false,
  prefix: '',
  required: false,
  rows: 1,
  setValue: null,
  suffix: '',
  type: TYPE.TEXT,
};
