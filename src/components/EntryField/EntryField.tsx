import React, { JSX, FocusEventHandler } from 'react';
import {
  InputAdornment,
  Paper,
  PopperPlacementType,
  TextField,
  Tooltip,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Children from '../../utils/types/types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
  label: string;
  testId: string;
  value: string | number;
  ariaDescription?: string;
  ariaTitle?: string;
  children?: Children;
  disabled?: boolean;
  disabledUnderline?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  password?: boolean;
  prefix?: JSX.Element | string;
  required?: boolean;
  rows?: number;
  select?: boolean;
  setValue?: Function;
  suffix?: JSX.Element | string;
  toolTip?: string;
  toolTipPlacement?: string;
  type?: TYPE;
  numScroller?: boolean;
}

export function EntryField({
  ariaDescription = 'Entry of a value',
  ariaTitle = 'EntryField',
  children,
  disabled = false,
  disabledUnderline = false,
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
  toolTipPlacement = 'bottom',
  type = TYPE.TEXT,
  numScroller = true,
  value,
}: EntryFieldProps): JSX.Element {
  const theSuffix = suffix ?? '';
  const thePrefix = prefix ?? '';
  const updateValue = (val: string | number) => setValue?.(val);
  const displayLabel = `${label}${required ? ' *' : ''}`;

  const slotPropsSx = numScroller
    ? undefined
    : {
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
      };

  const commonTextFieldProps = {
    'aria-label': ariaTitle,
    'aria-describedby': ariaDescription,
    color: 'secondary' as const,
    'data-testid': testId,
    disabled,
    error: !!errorText,
    fullWidth: true,
    helperText: errorText || helperText,
    inputRef,
    margin: 'none' as const,
    minRows: type !== TYPE.TEXT || !rows ? 1 : rows,
    maxRows: type !== TYPE.TEXT || !rows ? 1 : rows,
    multiline: type === TYPE.TEXT && rows > 1,
    name,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => updateValue(e.target.value),
    onBlur,
    onFocus,
    required,
    select,
    value,
    variant: 'standard' as const,
    type,
    slotProps: {
      input: {
        startAdornment: thePrefix && <InputAdornment position="start">{thePrefix}</InputAdornment>,
        endAdornment: theSuffix && <InputAdornment position="end">{theSuffix}</InputAdornment>,
        disableUnderline: disabledUnderline,
        sx: slotPropsSx,
      },
    },
  };

  return (
    <>
      {(labelPosition === LABEL_POSITION.START || labelPosition === LABEL_POSITION.END) && (
        <Grid container alignItems="center" sx={{ height, width: '100%' }}>
          {labelPosition === LABEL_POSITION.START && (
            <Grid size={{ xs: labelWidth }}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
                  <Typography
                    pt={0.5}
                    pb={0.5}
                    sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}
                  >
                    {displayLabel}
                  </Typography>
                </InputLabel>
              </Item>
            </Grid>
          )}
          <Grid size={{ xs: 12 - labelWidth }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
              <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
                <TextField {...commonTextFieldProps}>{children}</TextField>
              </Tooltip>
            </Item>
          </Grid>
          {labelPosition === LABEL_POSITION.END && (
            <Grid size={{ xs: labelWidth }}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                <InputLabel shrink={false} htmlFor={testId}>
                  <Typography sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}>
                    {displayLabel}
                  </Typography>
                </InputLabel>
              </Item>
            </Grid>
          )}
        </Grid>
      )}

      {(labelPosition === LABEL_POSITION.TOP || labelPosition === LABEL_POSITION.BOTTOM) && (
        <FormControl component="fieldset">
          <FormControlLabel
            disabled={disabled}
            labelPlacement={labelPosition}
            label={displayLabel}
            control={
              <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
                <TextField {...commonTextFieldProps}>{children}</TextField>
              </Tooltip>
            }
          />
        </FormControl>
      )}

      {labelPosition === LABEL_POSITION.CONTAINED && (
        <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
          <TextField {...commonTextFieldProps} label={label}>
            {children}
          </TextField>
        </Tooltip>
      )}
    </>
  );
}

export default EntryField;
