import React, { JSX } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { SelectOption } from './controlledSelect';
import { Controller, useFormContext } from 'react-hook-form';

type RadioButtonGroupProps = {
  name: string;
  options: SelectOption<string>[];
  /* optional fields */
  title?: string;
  value?: string;
  horizontal?: boolean;
  showBorder?: boolean;
  handleChange?: (optionValue: string) => void;
  children?: string | JSX.Element | JSX.Element[];
};

export const ControlledRadioButtonGroup = ({
  name,
  options,
  title,
  handleChange,
  children,
  horizontal,
  showBorder,
}: RadioButtonGroupProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl
          component="fieldset"
          sx={showBorder ? { border: 1, borderColor: 'divider', borderRadius: 1, p: 1 } : undefined}
        >
          {title && <FormLabel component="legend">{title}</FormLabel>}
          <RadioGroup
            row={horizontal ?? false}
            name={name}
            value={field.value}
            onChange={(evt: SyntheticEvent) => {
              field.onChange(evt);
              if (handleChange) {
                handleChange((evt.target as HTMLInputElement).value);
              }
            }}
          >
            {options.filter(Boolean).map((option: SelectOption<string>, index: number) => {
              const optionId = name + '-radio-' + option.value.replace(/ /g, '');
              return (
                <FormControlLabel
                  style={{
                    marginRight: '20px',
                  }}
                  id={optionId}
                  key={index}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  disabled={option.disabled ?? false}
                />
              );
            })}
          </RadioGroup>
          {children ?? null}
        </FormControl>
      )}
    />
  );
};
