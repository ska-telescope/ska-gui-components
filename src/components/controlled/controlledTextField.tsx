import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
  RegisterOptions,
} from 'react-hook-form';
import type { ChangeEvent, JSX } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ControlledTextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  label?: string;
  variant?: string;
  rules?: RegisterOptions<TFieldValues, TName>;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
} & TextFieldProps;

export const ControlledTextField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  label,
  variant = 'outlined',
  fullWidth = true,
  type = 'text',
  rules = undefined,
  onChange = undefined,
  ...otherProps
}: ControlledTextFieldProps<TFieldValues, TName>): JSX.Element => {
  const { control } = useFormContext<TFieldValues>();

  // If placeholder text is provided, display the placeholder rather than
  // the label even when TextField is not in focus
  if (otherProps?.placeholder) {
    otherProps = {
      ...otherProps,
      slotProps: {
        ...otherProps.slotProps,
        inputLabel: {
          ...otherProps.slotProps?.inputLabel,
          shrink: true,
        },
      },
    };
  }
  return (
    <Controller
      control={control}
      name={name}
      key={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          // Default here required to prevent
          // "Warning: A component is changing an uncontrolled input to be controlled.""
          value={field.value ?? ''}
          label={label}
          type={type}
          variant={variant}
          fullWidth={fullWidth}
          helperText={fieldState.error?.message ?? null}
          error={!!fieldState.error}
          onChange={(evt) => {
            field.onChange(evt); // RHF manages its own onChange to track the form field value so need to call that here
            if (onChange) {
              onChange(evt);
            }
          }}
          {...otherProps}
        />
      )}
    />
  );
};
