import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { ControlledNumberField, stepOnGrid } from './controlledNumberField';

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

// Shows the form value and its type, so a test can check what the field stored
const StoredValue = ({ name }: { name: string }) => {
  const value = useWatch({ name });
  return <output data-testid="stored">{`${typeof value}:${String(value)}`}</output>;
};

const stored = () => screen.getByTestId('stored');

// Typing comes as an InputEvent with an inputType
const typeInto = (input: HTMLElement, value: string) =>
  fireEvent.input(input, { target: { value }, inputType: 'insertText' });

// A step by the browser's arrows comes as an input event without an inputType, with the value the
// browser stepped to
const browserStep = (input: HTMLElement, value: string) =>
  fireEvent.input(input, { target: { value } });

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

  describe('stores a number', () => {
    test('from a number input', () => {
      render(
        <Wrapper defaultValues={{ field: 1 }}>
          <ControlledNumberField name="field" />
          <StoredValue name="field" />
        </Wrapper>,
      );

      typeInto(screen.getByRole('spinbutton'), '2.5');

      expect(stored()).toHaveTextContent('number:2.5');
    });

    test('or null when the input is cleared, shown empty', () => {
      render(
        <Wrapper defaultValues={{ field: 1 }}>
          <ControlledNumberField name="field" />
          <StoredValue name="field" />
        </Wrapper>,
      );
      const input = screen.getByRole('spinbutton');

      typeInto(input, '');

      expect(stored()).toHaveTextContent('object:null');
      expect(input).toHaveValue(null);
    });

    test('or null when a decimal input is left empty', () => {
      render(
        <Wrapper defaultValues={{ field: 1 }}>
          <ControlledNumberField name="field" decimalPlaces={2} />
          <StoredValue name="field" />
        </Wrapper>,
      );
      const input = screen.getByRole('spinbutton');

      typeInto(input, '');
      fireEvent.blur(input);

      expect(stored()).toHaveTextContent('object:null');
      expect(input).toHaveValue(null);
    });
  });

  describe('with decimal places, stepped by the browser', () => {
    const step = 0.84934656;
    const renderStepped = (defaultValue: number) =>
      render(
        <Wrapper defaultValues={{ field: defaultValue }}>
          <ControlledNumberField
            name="field"
            decimalPlaces={3}
            stepSize={step}
            min={step}
            max={12 * step}
            showArrows
          />
          <StoredValue name="field" />
        </Wrapper>,
      );
    const input = () => screen.getByRole('spinbutton');

    test('is a native number input showing the value rounded', () => {
      renderStepped(2 * step);

      expect(input()).toHaveAttribute('type', 'number');
      expect(input()).toHaveAttribute('step', String(step));
      expect(input()).toHaveValue(1.699);
    });

    // From the shown 1.699 the browser's arrow down gives the stored 2 steps again
    test("replaces the browser's step with one from the stored value", () => {
      renderStepped(2 * step);

      browserStep(input(), String(2 * step));

      expect(stored()).toHaveTextContent(`number:${step}`);
      expect(input()).toHaveValue(0.849);
    });

    test('steps up a full step from the stored value', () => {
      renderStepped(2 * step);

      browserStep(input(), '2.548');

      expect(input()).toHaveValue(2.548);
      expect(stored()).toHaveTextContent('number:2.54803968');
    });

    test('steps with the up and down keys the same way', () => {
      renderStepped(2 * step);

      fireEvent.keyDown(input(), { key: 'ArrowDown' });

      expect(stored()).toHaveTextContent(`number:${step}`);
    });

    test('keeps what the user types', () => {
      renderStepped(step);

      typeInto(input(), '1.2');

      expect(stored()).toHaveTextContent('number:1.2');
    });

    test('steps a value typed between steps onto the next step', () => {
      renderStepped(step);
      typeInto(input(), '1.2');
      fireEvent.blur(input());

      browserStep(input(), '1.699');

      expect(input()).toHaveValue(1.699);
    });

    test('stays within the limits', () => {
      renderStepped(12 * step);

      fireEvent.keyDown(input(), { key: 'ArrowUp' });

      expect(stored()).toHaveTextContent(`number:${12 * step}`);
    });
  });

  test.each([
    [2, 1, 3],
    [2, -1, 1],
    [2.4, 1, 3],
    [2.4, -1, 2],
  ])('stepOnGrid moves %s in direction %s to %s steps', (steps, direction, expected) => {
    const step = 0.5;
    expect(stepOnGrid(steps * step, step, 0, direction as 1 | -1)).toBe(expected * step);
  });

  // A step too small for rounding to fixed decimal places, which skipped or stalled on it
  test('stepOnGrid moves one step at a time with a small step size', () => {
    const step = 0.001 / 3;
    let value = 0;
    for (let i = 1; i <= 100; i++) {
      value = stepOnGrid(value, step, 0, 1);
      expect(value / step).toBeCloseTo(i, 6);
    }
    for (let i = 99; i >= 0; i--) {
      value = stepOnGrid(value, step, 0, -1);
      expect(value / step).toBeCloseTo(i, 6);
    }
  });
});
