import React, { JSX } from 'react';
import { Field } from '@base-ui-components/react/field';
import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import { PopperPlacementType, useTheme } from '@mui/material';
import styles from './NumberEntry2.module.css';
import { Tooltip } from '@mui/material';
import { fontWeight } from '@mui/system';

interface NumberEntry2Props {
  ariaDescription?: string;
  ariaTitle?: string;
  borderColor?: string;
  disabled?: boolean;
  errorColor?: string;
  errorText?: string;
  fieldHeight?: number;
  fieldName: string;
  icon?: boolean;
  iconBackground?: string;
  iconBorder?: string;
  iconColor?: string;
  prefix?: string | JSX.Element;
  prompt?: string;
  promptColor?: string;
  maxValue?: number | undefined;
  minValue?: number | undefined;
  required?: boolean;
  setValue: Function;
  step?: number;
  suffix?: string | JSX.Element;
  testId?: string;
  title?: string | JSX.Element;
  titleAlign?: 'left' | 'right' | 'center';
  titleColor?: string;
  titleFontSize?: string;
  titleFontWeight?: number;
  toolTip?: string;
  toolTipPlacement?: string;
  value: number | undefined;
  width?: number;
}

export function NumberEntry2({
  ariaDescription = 'Entry of a valid numeric value',
  ariaTitle = 'NumberEntry',
  borderColor,
  disabled = false,
  errorColor,
  errorText = 'Error',
  fieldName,
  icon = true,
  iconBackground,
  iconBorder,
  iconColor,
  maxValue,
  minValue,
  prefix = '',
  prompt = 'Prompt',
  promptColor,
  required = false,
  setValue,
  step = 1,
  suffix = '',
  title = '',
  titleAlign,
  titleColor,
  titleFontSize,
  titleFontWeight,
  testId = fieldName,
  toolTip = '',
  toolTipPlacement = 'bottom',
  value,
  width = 300,
}: NumberEntry2Props) {
  const id = React.useId();
  const theme = useTheme();

  const iconStyle = {
    color: iconColor ? iconColor : theme.palette.primary.main,
    backgroundColor: iconBackground ? iconBackground : 'transparent',
    borderColor: iconBorder ? iconBorder : 'transparent',
  };

  const iconStyleDisabled = {
    color: iconBackground ? iconBackground : 'transparent',
    backgroundColor: iconBackground ? iconBackground : 'transparent',
    borderColor: iconBorder ? iconBorder : 'transparent',
  };

  const inputStyle = {
    width: width,
    borderColor: borderColor ? borderColor : theme.palette.primary.main,
  };

  const errorStyle = {
    color: errorColor ? errorColor : theme.palette.error.main,
  };

  const promptStyle = {
    color: promptColor ? promptColor : theme.palette.primary.light,
  };

  const textStyle = {
    color: titleColor ? titleColor : theme.palette.primary.main,
    fontSize: titleFontSize ? titleFontSize : '16px',
    fontWeight: titleFontWeight ? titleFontWeight : 500,
    width: width,
    textAlign: titleAlign ? titleAlign : 'left',
  };

  const minDisabled = minValue === undefined || value === undefined ? false : value <= minValue;
  const maxDisabled = maxValue === undefined || value === undefined ? false : value >= maxValue;

  return (
    <Field.Root className={styles.Field}>
      <BaseNumberField.Root
        allowWheelScrub
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        id={id}
        className={styles.Field}
        data-testid={testId}
        defaultValue={value}
        disabled={disabled}
        largeStep={step * 10}
        max={maxValue}
        min={minValue}
        onValueChange={(itemValue) => setValue(itemValue)}
        required={required}
        step={step}
        value={value}
      >
        <BaseNumberField.ScrubArea className={styles.ScrubArea}>
          <label
            htmlFor={id}
            data-testid={testId + 'Title'}
            className={styles.Label}
            style={textStyle}
          >
            {title}
          </label>
          <BaseNumberField.ScrubAreaCursor className={styles.ScrubAreaCursor}>
            <CursorGrowIcon />
          </BaseNumberField.ScrubAreaCursor>
        </BaseNumberField.ScrubArea>

        <BaseNumberField.Group className={styles.Group}>
          {icon && (
            <BaseNumberField.Decrement
              data-testid={testId + 'Subtraction'}
              disabled={minDisabled}
              className={styles.Decrement}
              style={minDisabled ? iconStyleDisabled : iconStyle}
            >
              <MinusIcon />
            </BaseNumberField.Decrement>
          )}
          {prefix && <div className={styles.Prefix}>{prefix}</div>}

          <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
            <BaseNumberField.Input style={inputStyle} className={styles.Input} />
          </Tooltip>

          {suffix && <div className={styles.Suffix}>{suffix}</div>}
          {icon && (
            <BaseNumberField.Increment
              data-testid={testId + 'Addition'}
              disabled={maxDisabled}
              style={maxDisabled ? iconStyleDisabled : iconStyle}
              className={styles.Increment}
            >
              <PlusIcon />
            </BaseNumberField.Increment>
          )}
        </BaseNumberField.Group>
      </BaseNumberField.Root>
      <Field.Error data-testid={testId + 'Error'} style={errorStyle} forceShow={!!errorText}>
        {errorText}
      </Field.Error>
      <Field.Description data-testid={testId + 'Prompt'} style={promptStyle}>
        {errorText ? '' : prompt}
      </Field.Description>
    </Field.Root>
  );
}

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

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H10" />
    </svg>
  );
}

export default NumberEntry2;
