import React, { JSX } from 'react';
import { Field } from '@base-ui-components/react/field';
import { NumberField } from '@base-ui-components/react/number-field';
import ArrowSortDown from '../Icons/classic/ArrowSortDown';
import ArrowSortUp from '../Icons/classic/ArrowSortUp';
import { Box, PopperPlacementType, Stack, useTheme } from '@mui/material';
import styles from './NumberEntry2.module.css';
import { Tooltip } from '@mui/material';

interface NumberEntry2Props {
  disabled?: boolean;
  fieldHeight?: number;
  fieldName: string;
  prompt?: string;
  maxValue?: number;
  minValue?: number;
  required?: boolean;
  setValue: Function;
  step?: number;
  suffix?: any;
  testId?: string;
  title?: string | JSX.Element;
  toolTip?: string;
  toolTipPlacement?: string;
  value: number | undefined;
  width?: number;
}

export function NumberEntry2({
  disabled = false,
  fieldHeight = 85,
  fieldName,
  maxValue = 9999999,
  minValue = 0,
  prompt = '',
  required = false,
  setValue,
  step = 0.1,
  suffix = null,
  title = '',
  testId = fieldName,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
  width = 5,
}: NumberEntry2Props) {
  const id = React.useId();
  const theme = useTheme();

  const inputStyle = {
    margin: 0,
    padding: 0,
    paddingLeft: '0.5rem',
    border: 'none',
    height: '2.5rem',
    width: width,
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: 'normal',
    backgroundColor: 'transparent',
    color: theme.palette.primary.contrastText,

    textAlign: 'left' as 'left',
    fontVariantNumeric: 'tabular-nums',
    outline: 'none',
  };

  return (
    <Box sx={{ height: fieldHeight }}>
      <Box
        pt={1}
        sx={{
          borderBottomColor: 'palette.secondary.light',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        }}
      >
        <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
          <Stack direction="row">
            <NumberField.Root
              allowWheelScrub
              id={id}
              className={styles.Field}
              data-testid={testId}
              defaultValue={value}
              disabled={disabled}
              largeStep={1}
              max={maxValue}
              min={minValue}
              onValueChange={(itemValue) => setValue(itemValue)}
              required={required}
              step={step}
              value={value}
            >
              <NumberField.ScrubArea className={styles.ScrubArea}>
                <label htmlFor={id} className={styles.Label}>
                  {title}
                </label>
              </NumberField.ScrubArea>

              <NumberField.Group className={styles.Group}>
                <NumberField.Input style={inputStyle} />
                <Stack>
                  <NumberField.Increment className={styles.Increment}>
                    <ArrowSortUp />
                  </NumberField.Increment>
                  <NumberField.Decrement className={styles.Decrement}>
                    <ArrowSortDown />
                  </NumberField.Decrement>
                </Stack>
              </NumberField.Group>
            </NumberField.Root>
            {suffix}
          </Stack>
        </Tooltip>
      </Box>
      <Field.Root className={styles.Field}>
        <Field.Description className={styles.Description}>{prompt}</Field.Description>
      </Field.Root>
    </Box>
  );
}

export default NumberEntry2;
