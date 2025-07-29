import React, { FocusEventHandler, JSX } from 'react';
import {
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  MenuItem,
  TextField,
  Tooltip,
  PopperPlacementType,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LABEL_POSITION } from '../EntryField/EntryField';
import { InputLabel, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export interface DropDownProps {
  // required
  options: { label: string; value: string | number; disabled: boolean }[];
  testId?: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  label: string;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  maxMenuHeight?: string;
  name?: string;
  onFocus?: Function;
  required?: boolean;
  setValue?: Function;
  toolTip?: string;
  toolTipPlacement?: string;
}

export function DropDown({
  ariaDescription = 'Selection of a value from a list of possible values',
  ariaTitle = 'DropDown',
  disabled = false,
  errorText = '',
  height = 45,
  helperText = '',
  inputRef,
  label,
  labelBold = false,
  labelPosition = LABEL_POSITION.CONTAINED,
  labelWidth = 4,
  maxMenuHeight = '40vh',
  name = '',
  onFocus,
  options,
  required = false,
  setValue,
  testId = 'dropDown-testId',
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
}: DropDownProps): JSX.Element {
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
            <Grid size={{ xs: labelWidth }}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
                  <Typography sx={{ fontWeight: !disabled && labelBold ? 'bold' : 'normal' }}>
                    {displayLabel}
                  </Typography>
                </InputLabel>
              </Item>
            </Grid>
          )}
          <Grid size={{ xs: 12 - labelWidth }}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
              <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
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
                  margin="none"
                  name={'dropDown' + label}
                  onChange={(e: { target: { value: string | number } }) => {
                    updateValue(e.target.value);
                  }}
                  onFocus={onFocus as FocusEventHandler}
                  required={required}
                  select
                  sx={{ idth: '100%' }}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          maxHeight: maxMenuHeight,
                        },
                      },
                    },
                  }}
                  value={value}
                  variant="standard"
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Tooltip>
            </Item>
          </Grid>
          {labelPosition === LABEL_POSITION.END && (
            <Grid size={{ xs: labelWidth }}>
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                <InputLabel disabled={disabled} shrink={false} htmlFor={testId}>
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
        <FormControl sx={{ width: '100%' }} component="fieldset">
          <FormControlLabel
            disabled={disabled}
            labelPlacement={labelPosition}
            label={label}
            control={
              <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
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
                  onFocus={onFocus as FocusEventHandler}
                  required={required}
                  select
                  sx={{ idth: '100%' }}
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          maxHeight: maxMenuHeight,
                        },
                      },
                    },
                  }}
                  value={value}
                  variant="standard"
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Tooltip>
            }
          />
        </FormControl>
      )}

      {labelPosition === LABEL_POSITION.CONTAINED && (
        <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
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
            inputRef={inputRef}
            label={label}
            name={name}
            onChange={(e: { target: { value: string | number } }) => {
              updateValue(e.target.value);
            }}
            onFocus={onFocus as FocusEventHandler}
            required={required}
            select
            sx={{ idth: '100%' }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: {
                    maxHeight: maxMenuHeight,
                  },
                },
              },
            }}
            value={value}
            variant="standard"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Tooltip>
      )}
    </>
  );
}

export default DropDown;
