/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { FocusEventHandler, JSX } from 'react';
import { InputAdornment, PopperPlacementType, TextField, Tooltip, useTheme } from '@mui/material';
import SearchIcon from '../Icons/classic/SearchIcon';

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export interface SearchEntryProps {
  // required
  label: string;
  testId?: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  onFocus?: Function;
  setValue?: Function;
  toolTip?: string;
  toolTipPlacement?: string;
}

export function SearchEntry({
  ariaDescription = 'Entry of a search value',
  ariaTitle = 'SearchEntry',
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  onFocus,
  setValue,
  testId = 'searchEntry-' + label,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
}: SearchEntryProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
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
        label={label}
        margin="normal"
        minRows="1"
        maxRows={1}
        multiline={false}
        name={'searchEntry' + label}
        onChange={(e: { target: { value: any } }) => {
          updateValue(e.target.value);
        }}
        value={value}
        variant="standard"
        type="text"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon colorFG={useTheme().palette.primary.contrastText} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Tooltip>
  );
}

export default SearchEntry;
