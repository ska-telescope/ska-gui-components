import { Controller, FieldValues, FieldPath, RegisterOptions } from 'react-hook-form';
import type { JSX } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent, useState } from 'react';

type ControlledNumberFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
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
  return (0).toFixed(decimalPlaces);
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
  TName extends FieldPath<TFieldValues>,
>({
  name,
  label,
  sx = {},
  type = 'number',
  variant = 'outlined',
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

  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        const displayValue =
          decimalPlaces !== undefined
            ? getDecimalDisplayValue(field.value, decimalPlaces, rawInput)
            : (field.value ?? 0);
        return (
          <TextField
            sx={showArrows ? sx : { ...cssHideArrows, ...sx }}
            label={label}
            fullWidth={fullWidth}
            {...field}
            value={displayValue}
            variant={variant}
            disabled={disabled}
            type={decimalPlaces !== undefined ? 'text' : type}
            slotProps={{
              ...extraSlotProps,
              htmlInput: {
                ...(extraSlotProps?.htmlInput as object),
                step: stepSize,
                min: min,
                max: max,
              },
            }}
            error={!!fieldState.error}
            {...otherProps}
            helperText={fieldState.error?.message ?? helperText}
            onChange={(evt: ChangeEvent) => {
              if (decimalPlaces !== undefined) {
                const raw = (evt.target as HTMLInputElement).value;
                setRawInput(raw);
                const parsed = parseFloat(raw);
                if (!isNaN(parsed)) {
                  field.onChange(parsed);
                }
              } else {
                field.onChange(evt); // RHF manages its own onChange to track the form field value so need to call that here
              }
              if (onChange) {
                onChange(evt);
              }
            }}
            onBlur={
              decimalPlaces !== undefined
                ? (evt) => {
                    setRawInput(null);
                    const parsed = parseFloat((evt.target as HTMLInputElement).value);
                    field.onChange(isNaN(parsed) ? 0 : parsed);
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
