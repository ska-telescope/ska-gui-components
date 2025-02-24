import React from 'react';
import { NumberField } from '@base-ui-components/react/number-field';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Stack } from '@mui/system';
import styles from './NumberEntry.module.css';
import { Tooltip } from '@mui/material';
import { LABEL_POSITION } from '../EntryField/EntryField.js';

export interface NumberEntry2Props {
  // required
  label: string;
  value: number;
  // optional
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  errorText?: string;
  height?: number;
  helperText?: string;
  inputRef?: React.MutableRefObject<any>;
  labelBold?: boolean;
  labelPosition?: LABEL_POSITION;
  labelWidth?: number;
  password?: boolean;
  name?: string;
  onBlur?: Function;
  onFocus?: Function;
  prefix?: React.JSX.Element | string;
  required?: boolean;
  setValue?: Function;
  suffix?: React.JSX.Element | string;
  testId?: string;
  toolTip?: string;
}

export function NumberEntry2({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry2',
  disabled = false,
  errorText = '',
  height,
  helperText = '',
  inputRef,
  label,
  labelBold = false,
  labelPosition,
  labelWidth,
  name = '',
  onBlur,
  onFocus,
  prefix = '',
  required = false,
  setValue,
  suffix = '',
  testId = 'NumberEntry-' + label,
  toolTip = '',
  value,
}: NumberEntry2Props): React.JSX.Element {
  function isNumber(value?: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  const id = React.useId();

  function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
    return (
      <svg
        width="26"
        height="14"
        viewBox="0 0 24 14"
        fill="black"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
      </svg>
    );
  }

  const errText = () => {
    if (required && !isNumber(value)) {
      return 'A numeric value is required';
    }
    return errorText;
  };

  return (
    <Box
      pt={1}
      sx={{
        borderBottomColor: 'palette.secondary.light',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
      }}
    >
      <Tooltip title={toolTip} arrow>
        <Stack direction="row">
          <NumberField.Root
            allowWheelScrub
            id={id}
            className={styles.Field}
            data-testid={testId}
            defaultValue={value}
            disabled={disabled}
            largeStep={1}
            required={required}
            step={0.1}
          >
            <NumberField.ScrubArea className={styles.ScrubArea}>
              <label htmlFor={id} className={styles.Label}>
                {label}
              </label>
              <NumberField.ScrubAreaCursor className={styles.ScrubAreaCursor}>
                <CursorGrowIcon color="palette.primary.dark" />
              </NumberField.ScrubAreaCursor>
            </NumberField.ScrubArea>

            <NumberField.Group className={styles.Group}>
              <NumberField.Input className={styles.Input} />
              <Stack>
                <NumberField.Increment className={styles.Increment}>
                  <ArrowDropUpIcon color="action" />
                </NumberField.Increment>
                <NumberField.Decrement className={styles.Decrement}>
                  <ArrowDropDownIcon color="action" />
                </NumberField.Decrement>
              </Stack>
            </NumberField.Group>
          </NumberField.Root>

          <Box pt={5}>{suffix}</Box>
        </Stack>
      </Tooltip>
    </Box>
  );
}

export default NumberEntry2;
