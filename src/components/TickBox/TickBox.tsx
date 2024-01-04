import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

export interface TickBoxProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  errorText?: string;
  fontSize?: number;
  helperText?: string;
  label?: string;
  labelEnd?: boolean;
  password?: boolean;
  prefix?: JSX.Element | string;
  onChange?: Function;
  onFocus?: Function;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: JSX.Element | string;
  testId: string;
}

export function TickBox({
  ariaDescription = 'Entry of a textual value',
  ariaTitle = 'TickBox',
  checked,
  disabled = false,
  defaultChecked,
  fontSize = 28,
  label,
  labelEnd = true,
  onChange,
  onFocus,
  testId,
}: TickBoxProps): JSX.Element {
  const theme = useTheme();

  return (
    <FormControlLabel
      aria-description={ariaDescription}
      aria-title={ariaTitle}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      testid={testId}
      onChange={onChange}
      onFocus={onFocus}
      control={
        <Checkbox
          defaultChecked
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
      label={label}
      labelPlacement={labelEnd ? 'end' : 'start'}
      sx={{ '& .MuiSvgIcon-root': { fontSize: { fontSize } } }}
    />
  );
}

export default TickBox;
