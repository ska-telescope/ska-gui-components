import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import { ControlledSelect, createSelectOptions, SelectOption } from './controlledSelect';

type FormValues = { choice: string };

const OPTIONS: SelectOption<string>[] = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const TestForm = ({
  onChange,
  withFormUpdate = true,
}: {
  onChange?: (event: { target: { value: unknown } }) => void;
  withFormUpdate?: boolean;
}) => {
  const methods = useForm<FormValues>({ defaultValues: { choice: 'a' } });
  return (
    <FormProvider {...methods}>
      <ControlledSelect<FormValues, 'choice', string>
        name="choice"
        label="Choice"
        options={OPTIONS}
        onChange={onChange}
        withFormUpdate={withFormUpdate}
      />
      <output data-testid="form-value">{methods.watch('choice')}</output>
    </FormProvider>
  );
};

const user = userEvent.setup({ delay: null });

describe('ControlledSelect', () => {
  test('renders the label and initial form value', () => {
    render(<TestForm />);

    expect(screen.getByRole('combobox', { name: 'Choice' })).toHaveTextContent('Option A');
    expect(screen.getByTestId('form-value')).toHaveTextContent('a');
  });

  test('updates the form value when an option is selected', async () => {
    render(<TestForm />);

    await user.click(screen.getByRole('combobox', { name: 'Choice' }));
    await user.click(screen.getByRole('option', { name: 'Option B' }));

    expect(screen.getByRole('combobox', { name: 'Choice' })).toHaveTextContent('Option B');
    expect(screen.getByTestId('form-value')).toHaveTextContent('b');
  });

  test('calls the custom onChange handler when an option is selected', async () => {
    const onChange = vi.fn();
    render(<TestForm onChange={onChange} />);

    await user.click(screen.getByRole('combobox', { name: 'Choice' }));
    await user.click(screen.getByRole('option', { name: 'Option B' }));

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].target.value).toBe('b');
  });

  test('does not update the form when withFormUpdate is false', async () => {
    const onChange = vi.fn();
    render(<TestForm onChange={onChange} withFormUpdate={false} />);

    await user.click(screen.getByRole('combobox', { name: 'Choice' }));
    await user.click(screen.getByRole('option', { name: 'Option B' }));

    expect(onChange).toHaveBeenCalledOnce();
    expect(screen.getByTestId('form-value')).toHaveTextContent('a');
    expect(screen.getByRole('combobox', { name: 'Choice' })).toHaveTextContent('Option A');
  });

  test('requires onChange when withFormUpdate is false', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      expect(() => render(<TestForm withFormUpdate={false} />)).toThrow(
        'An onChange function that handles the form update should be passed',
      );
    } finally {
      consoleError.mockRestore();
    }
  });

  test('creates options from a record', () => {
    expect(createSelectOptions({ FIRST: 'first', SECOND: 'second' })).toEqual([
      { label: 'first', value: 'first' },
      { label: 'second', value: 'second' },
    ]);
  });
});
