import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

export enum TICK_BOX_LABEL_POSITION {
  START = 'start',
  TOP = 'top',
  BOTTOM = 'bottom',
  END = 'end',
}

export interface TickBoxProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  fontSize?: number;
  label?: string;
  labelPosition?: TICK_BOX_LABEL_POSITION;
  onChange?: Function;
  onFocus?: Function;
  testId: string;
}

export function TickBox({
  ariaDescription = 'Entry of a textual value',
  ariaTitle = 'TickBox',
  checked = false,
  disabled = false,
  defaultChecked,
  fontSize = 28,
  label,
  labelPosition = TICK_BOX_LABEL_POSITION.START,
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
      labelPlacement={labelPosition}
      sx={{ '& .MuiSvgIcon-root': { fontSize: { fontSize } } }}
    />
  );
}

export default TickBox;
