import React from 'react';
import { EntryField, TYPE } from '../EntryField/EntryField';

export interface TextEntryProps {
  // required
  label: string;
  value: string;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  password?: boolean;
  prefix?: string;
  required?: boolean;
  rows?: number;
  setValue?: Function;
  suffix?: string;
}

export function TextEntry({
  ariaDescription,
  ariaTitle,
  disabled,
  errorText,
  helperText,
  label,
  required,
  rows,
  setValue,
  value,
}: TextEntryProps): JSX.Element {
  const errText = () => {
    if (required) {
      if (!value || value.length === 0) {
        errorText = 'entryField.required';
      }
    }
    return errorText;
  };

  return (
    <EntryField
      aria-label={ariaTitle}
      aria-describedby={ariaDescription}
      aria-description={ariaDescription}
      data-testId={label + ariaTitle}
      disabled={disabled}
      errorText={errText()}
      helperText={helperText}
      label={label}
      rows={rows}
      value={value}
      required={required}
      type={TYPE.TEXT}
      setValue={setValue}
    />
  );
}

//type="password"
//autoComplete="current-password"

TextEntry.defaultProps = {
  ariaDescription: 'Entry of a textual value',
  ariaTitle: 'TextEntry',
  disabled: false,
  helperText: '',
  password: false,
  required: false,
  rows: 1,
  setValue: null,
  type: 'text',
};

export default TextEntry;
