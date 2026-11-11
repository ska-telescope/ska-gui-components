import { Controller, FieldValues, FieldPathByValue, RegisterOptions } from 'react-hook-form';
import type { JSX } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent, useState } from 'react';

// Only paths whose value is number | null are accepted, as that is what the field stores, so
// binding it to a field typed as a string (and so given a string default) is a type error
type NumberFieldPath<TFieldValues extends FieldValues> = FieldPathByValue<
  TFieldValues,
  number | null
>;

type ControlledNumberFieldProps<
  TFieldValues extends FieldValues,
  TName extends NumberFieldPath<TFieldValues>,
> = {
  name: TName;
  label?: string;
  disabled?: boolean;
  stepSize?: number;
  showArrows?: boolean;
  min?: number;
  max?: number;
  decimalPlaces?: number;
  rules?: RegisterOptions<TFieldValues, TName>;
  onChange?: (event: ChangeEvent) => void;
} & TextFieldProps;

const getDecimalDisplayValue = (
  fieldValue: unknown,
  decimalPlaces: number,
  rawInput: string | null,
): string => {
  if (rawInput !== null) return rawInput;
  if (typeof fieldValue === 'number') return fieldValue.toFixed(decimalPlaces);
  return '';
};

// How close a value must be to a step to count as on it, in the units of the value
const STEP_EPSILON = 1e-6;

export const stepOnGrid = (
  value: number,
  stepSize: number,
  min: number,
  direction: 1 | -1,
): number => {
  const steps = (value - min) / stepSize;
  const next =
    direction === 1 ? Math.floor(steps + STEP_EPSILON) + 1 : Math.ceil(steps - STEP_EPSILON) - 1;
  return Math.round((min + next * stepSize) * 1e9) / 1e9;
};

const cssHideArrows = {
  '& input[type=number]': {
    MozAppearance: 'textfield', // for Firefox
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none', // for Chrome and Safari
    margin: 0,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none', // for Chrome and Safari
    margin: 0,
  },
};

export const ControlledNumberField = <
  TFieldValues extends FieldValues,
  TName extends NumberFieldPath<TFieldValues>,
>({
  name,
  label,
  sx = {},
  type = 'number',
  variant = 'standard',
  disabled = false,
  stepSize = 1,
  min = 0,
  max = undefined,
  showArrows = false,
  helperText = null,
  fullWidth = true,
  decimalPlaces = undefined,
  rules = undefined,
  onChange = undefined,
  slotProps: extraSlotProps,
  ...otherProps
}: ControlledNumberFieldProps<TFieldValues, TName>): JSX.Element => {
  const [rawInput, setRawInput] = useState<string | null>(null);
  const isDecimal = decimalPlaces !== undefined;

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        // A partial entry such as "-" reads as "" in a number input, so showing the null value
        // as "" leaves what the user is typing in place
        const displayValue = isDecimal
          ? getDecimalDisplayValue(field.value, decimalPlaces, rawInput)
          : (field.value ?? '');

        const step = (direction: 1 | -1) => {
          const current = typeof field.value === 'number' ? field.value : min;
          const next = stepOnGrid(current, stepSize, min, direction);
          setRawInput(null);
          field.onChange(Math.min(Math.max(next, min), max ?? Infinity));
        };

        return (
          <TextField
            sx={showArrows ? sx : { ...cssHideArrows, ...sx }}
            label={label}
            fullWidth={fullWidth}
            {...field}
            value={displayValue}
            variant={variant}
            disabled={disabled}
            type={type}
            slotProps={{
              ...extraSlotProps,
              htmlInput: {
                ...(extraSlotProps?.htmlInput as object),
                step: stepSize,
                min: min,
                max: max,
              },
            }}
            {...otherProps}
            onKeyDown={(evt) => {
              if (isDecimal && (evt.key === 'ArrowUp' || evt.key === 'ArrowDown')) {
                evt.preventDefault();
                step(evt.key === 'ArrowUp' ? 1 : -1);
              }
              otherProps.onKeyDown?.(evt);
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message || helperText}
            onChange={(evt: ChangeEvent) => {
              const input = evt.target as HTMLInputElement;
              // Typing, pasting and deleting come as an InputEvent with an inputType; a step
              // by the browser's arrows comes without one
              const inputType = (evt.nativeEvent as InputEvent).inputType;
              if (isDecimal && !inputType) {
                const shown = parseFloat(displayValue);
                const stepped = parseFloat(input.value);
                if (!isNaN(shown) && !isNaN(stepped) && stepped !== shown) {
                  step(stepped > shown ? 1 : -1);
                } else if (!isNaN(stepped)) {
                  // A step from an empty field: the browser's value is already on the grid
                  setRawInput(null);
                  field.onChange(stepped);
                }
              } else if (isDecimal) {
                setRawInput(input.value);
                const parsed = parseFloat(input.value);
                if (input.value === '') {
                  field.onChange(null);
                } else if (!isNaN(parsed)) {
                  field.onChange(parsed);
                }
              } else {
                field.onChange(input.value === '' ? null : input.valueAsNumber);
              }
              if (onChange) {
                onChange(evt);
              }
            }}
            onBlur={
              isDecimal
                ? (evt) => {
                    setRawInput(null);
                    const parsed = parseFloat((evt.target as HTMLInputElement).value);
                    field.onChange(isNaN(parsed) ? null : parsed);
                    field.onBlur();
                  }
                : field.onBlur
            }
          />
        );
      }}
    />
  );
};
