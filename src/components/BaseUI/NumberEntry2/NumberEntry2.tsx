/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { JSX } from 'react';
import { Field } from '@base-ui/react/field';
import { NumberField as BaseNumberEntry2 } from '@base-ui/react/number-field';
import styles from './NumberEntry2.module.css';
import './NumberEntry2.module.css';
import { PopperPlacementType, Tooltip } from '@mui/material';

interface NumberEntry2Props {
  ariaDescription?: string;
  ariaTitle?: string;
  disabled?: boolean;
  disabledUnderline?: boolean;
  errorText?: string;
  fieldName: string;
  icon?: boolean;
  iconColor?: string;
  iconSize?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  plusMinus?: boolean;
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

  fullWidth?: boolean;
  sx?: React.CSSProperties;
}

export function NumberEntry2({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  disabled = false,
  disabledUnderline = false,
  errorText = '',
  fieldName,
  icon = true,
  maxValue = 9999999,
  minValue = 0,
  onFocus,
  plusMinus = false,
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

  fullWidth = false,
  sx = {},
}: NumberEntry2Props) {
  const id = React.useId();

  return (
    <Field.Root
      className={styles.Field}
      style={{
        width: fullWidth ? '100%' : undefined,
        ...sx,
      }}
    >
      <BaseNumberEntry2.Root
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
      >
        {scrubArea ? (
          <BaseNumberEntry2.ScrubArea className={styles.ScrubArea}>
            <label htmlFor={id} className={styles.Label}>
              {title}
            </label>
            <BaseNumberEntry2.ScrubAreaCursor className={styles.ScrubAreaCursor}>
              <CursorGrowIcon />
            </BaseNumberEntry2.ScrubAreaCursor>
          </BaseNumberEntry2.ScrubArea>
        ) : (
          <label htmlFor={id} data-testid={testId + 'Title'} className={styles.Label}>
            {title}
          </label>
        )}

        <BaseNumberEntry2.Group className={styles.Group}>
          {icon && plusMinus && (
            <BaseNumberEntry2.Decrement
              data-testid={testId + 'Subtraction'}
              className={styles.Decrement}
            >
              <MinusIcon />
            </BaseNumberEntry2.Decrement>
          )}
          {prefix && <div className={styles.Prefix}>{prefix}</div>}

          <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
            <BaseNumberEntry2.Input
              className={disabledUnderline ? styles.Clear : styles.Input}
              onFocus={onFocus}
            />
          </Tooltip>

          {icon && !plusMinus && (
            <div className={styles.ArrowColumn}>
              <BaseNumberEntry2.Increment className={styles.Increment}>
                <UpArrowIcon />
              </BaseNumberEntry2.Increment>

              <BaseNumberEntry2.Decrement className={styles.Decrement}>
                <DownArrowIcon />
              </BaseNumberEntry2.Decrement>
            </div>
          )}
          {suffix && <div className={styles.Suffix}>{suffix}</div>}

          {icon && plusMinus && (
            <BaseNumberEntry2.Increment
              data-testid={testId + 'Addition'}
              className={styles.Increment}
            >
              <PlusIcon />
            </BaseNumberEntry2.Increment>
          )}
        </BaseNumberEntry2.Group>
      </BaseNumberEntry2.Root>

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

function UpArrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="16" height="16" viewBox="0 0 10 10" {...props}>
      <path d="M5 2 L2 6 H8 Z" fill="currentColor" />
    </svg>
  );
}

function DownArrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="16" height="16" viewBox="0 0 10 10" {...props}>
      <path d="M5 8 L2 4 H8 Z" fill="currentColor" />
    </svg>
  );
}

export default NumberEntry2;
