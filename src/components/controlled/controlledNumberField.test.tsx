import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import { ControlledNumberField } from './controlledNumberField';

const Wrapper = ({
  defaultValues = {},
  children,
}: {
  defaultValues?: Record<string, unknown>;
  children: React.ReactNode;
}) => {
  const methods = useForm({ mode: 'onChange', defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('ControlledNumberField', () => {
  test('sets step, min and max attributes from props', () => {
    render(
      <Wrapper defaultValues={{ field: 10 }}>
        <ControlledNumberField name="field" stepSize={5} min={5} max={100} />
      </Wrapper>,
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('step', '5');
    expect(input).toHaveAttribute('min', '5');
    expect(input).toHaveAttribute('max', '100');
  });

  test('step, min and max attributes are preserved when slotProps with endAdornment is also passed', () => {
    // Regression: passing slotProps.input.endAdornment used to overwrite the htmlInput
    // step/min/max attrs, causing arrows to use the browser default step of 1.
    render(
      <Wrapper defaultValues={{ field: 10 }}>
        <ControlledNumberField
          name="field"
          stepSize={5}
          min={5}
          max={100}
          slotProps={{
            input: {
              endAdornment: <span>MHz</span>,
            },
          }}
        />
      </Wrapper>,
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('step', '5');
    expect(input).toHaveAttribute('min', '5');
    expect(input).toHaveAttribute('max', '100');
  });
});
