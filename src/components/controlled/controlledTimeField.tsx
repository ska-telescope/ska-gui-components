import { useFormContext, Controller, FieldValues, FieldPath } from 'react-hook-form';
import type { JSX } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ControlledTimeFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  label?: string;
  stepSize?: number;
  showArrows?: boolean;
  min?: string | number;
  max?: string | number;
} & TextFieldProps;

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

export const ControlledTimeField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  label,
  sx = {},
  type = 'time',
  variant = 'outlined',
  onChange,
  stepSize = 1,
  min = 0,
  max = undefined,
  showArrows = false,
  helperText = null,
  fullWidth = true,
  ...otherProps
}: ControlledTimeFieldProps<TFieldValues, TName>): JSX.Element => {
  const { control } = useFormContext<TFieldValues>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <TextField
            sx={showArrows ? sx : { ...cssHideArrows, ...sx }}
            label={label}
            fullWidth={fullWidth}
            {...field}
            // Default here required to prevent
            // "Warning: A component is changing an uncontrolled input to be controlled."
            value={field.value ?? ''}
            variant={variant}
            type={type}
            slotProps={{
              htmlInput: { step: stepSize, min: min, max: max },
            }}
            error={!!fieldState.error}
            {...otherProps}
            helperText={fieldState.error?.message ?? helperText}
            onChange={(evt) => {
              field.onChange(evt); // RHF manages its own onChange to track the form field value so need to call that here
              if (onChange) {
                onChange(evt);
              }
            }}
          />
        );
      }}
    />
  );
};
