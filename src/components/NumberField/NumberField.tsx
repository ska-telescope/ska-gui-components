/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { JSX } from 'react';
import { Field } from '@base-ui/react/field';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import styles from './NumberField.module.css';
import { PopperPlacementType, Tooltip } from '@mui/material';

interface NumberFieldProps {
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  disabledUnderline?: boolean;
  errorText?: string;
  fieldName: string;
  icon?: boolean;
  iconColor?: string;
  iconSize?: number;
  prefix?: string | JSX.Element;
  prompt?: string;
  maxValue?: number;
  minValue?: number;
  required?: boolean;
  scrubArea?: boolean;
  setValue: Function;
  step?: number;
  suffix?: string | JSX.Element;
  testId?: string;
  title?: string | JSX.Element;
  toolTip?: string;
  toolTipPlacement?: string;
  value: number | undefined;

  // ⭐ NEW
  fullWidth?: boolean;
  sx?: React.CSSProperties;
}

export function NumberField({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  disabled = false,
  disabledUnderline = false,
  errorText = '',
  fieldName,
  icon = true,
  maxValue = 9999999,
  minValue = 0,
  prefix = '',
  prompt = '',
  required = false,
  scrubArea = false,
  setValue,
  step = 0.1,
  suffix = '',
  title = '',
  testId = fieldName,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,

  // ⭐ NEW
  fullWidth = false,
  sx = {},
}: NumberFieldProps) {
  const id = React.useId();

  return (
    <Field.Root
      className={styles.Field}
      style={{
        width: fullWidth ? '100%' : undefined,
        ...sx,
      }}
    >
      <BaseNumberField.Root
        allowWheelScrub
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        id={id}
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
        className={styles.InnerField} // ⭐ NEW: separate class for inner container
      >
        {scrubArea ? (
          <BaseNumberField.ScrubArea className={styles.ScrubArea}>
            <label htmlFor={id} className={styles.Label}>
              {title}
            </label>
            <BaseNumberField.ScrubAreaCursor className={styles.ScrubAreaCursor}>
              <CursorGrowIcon />
            </BaseNumberField.ScrubAreaCursor>
          </BaseNumberField.ScrubArea>
        ) : (
          <label htmlFor={id} data-testid={testId + 'Title'} className={styles.Label}>
            {title}
          </label>
        )}

        <BaseNumberField.Group className={styles.Group}>
          {icon && (
            <BaseNumberField.Decrement
              data-testid={testId + 'Subtraction'}
              className={styles.Decrement}
            >
              <MinusIcon />
            </BaseNumberField.Decrement>
          )}

          {prefix && <div className={styles.Prefix}>{prefix}</div>}

          <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
            <BaseNumberField.Input className={disabledUnderline ? styles.Clear : styles.Input} />
          </Tooltip>

          {suffix && <div className={styles.Suffix}>{suffix}</div>}

          {icon && (
            <BaseNumberField.Increment
              data-testid={testId + 'Addition'}
              className={styles.Increment}
            >
              <PlusIcon />
            </BaseNumberField.Increment>
          )}
        </BaseNumberField.Group>
      </BaseNumberField.Root>

      <Field.Error data-testid={testId + 'Error'} className={styles.Error}>
        {errorText}
      </Field.Error>

      <Field.Description data-testid={testId + 'Prompt'} className={styles.Description}>
        {prompt}
      </Field.Description>
    </Field.Root>
  );
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="26" height="14" viewBox="0 0 24 14" fill="black" stroke="white" {...props}>
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M0 5H10" />
    </svg>
  );
}

export default NumberField;
