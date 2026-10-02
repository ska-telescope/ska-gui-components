import { JSX } from 'react';
import { Controller, FieldValues, FieldPath, useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

type ControlledCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  label: string;
  disabled?: boolean;
};

export const ControlledCheckbox = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  label = '',
  disabled = false,
  ...otherProps
}: ControlledCheckboxProps<TFieldValues, TName>): JSX.Element => {
  const { control } = useFormContext<TFieldValues>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={Boolean(field.value)}
                disabled={disabled}
                {...otherProps}
              />
            }
            label={label}
            {...otherProps}
          />
        );
      }}
    />
  );
};
