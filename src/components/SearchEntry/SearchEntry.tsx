import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ColorTypes, Variants } from '../../models';

export enum STATE {
  OK = 'ok',
  ERROR = 'error',
  NONE = 'none',
  UNKNOWN = 'unknown',
}

export interface SearchEntryProps {
  // required
  label: string;
  testId: string;
  value: string | number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  color?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  onFocus?: Function;
  setValue?: Function;
  margin?: string;
  variant?: Variants.Standard | Variants.Filled | Variants.Outlined;
}

export function SearchEntry({
  ariaDescription = 'Entry of a search value',
  ariaTitle = 'SearchEntry',
  color = ColorTypes.Secondary,
  disabled = false,
  errorText = '',
  helperText = '',
  label,
  margin = 'normal',
  onFocus,
  setValue,
  testId,
  value,
  variant = Variants.Standard
}: SearchEntryProps): JSX.Element {
  const updateValue = (e: any) => (typeof setValue !== 'function' ? null : setValue(e));

  return (
    <TextField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-hidden={false}
      color={color}
      data-testid={testId}
      disabled={disabled}
      error={errorText && errorText.length > 0 ? true : false}
      onFocus={onFocus}
      fullWidth
      helperText={errorText ? errorText : helperText ? helperText : ''}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      label={label}
      margin={margin}
      minRows={1}
      maxRows={1}
      multiline={false}
      name={'searchEntry' + label}
      onChange={(e: { target: { value: any } }) => {
        updateValue(e.target.value);
      }}
      value={value}
      variant={variant}
      type="text"
    />
  );
}

export default SearchEntry;
