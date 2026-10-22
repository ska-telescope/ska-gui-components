import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';
import { ControlledTextField } from './controlledTextField';

type FormValues = { name: string };

const TestForm = ({
  onChange,
  rules,
  placeholder,
  helperText,
}: {
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rules?: { required: string | boolean };
  placeholder?: string;
  helperText?: string;
}) => {
  const methods = useForm<FormValues>({ defaultValues: { name: 'Ada' }, mode: 'onChange' });
  return (
    <FormProvider {...methods}>
      <ControlledTextField<FormValues, 'name'>
        name="name"
        label="Name"
        onChange={onChange}
        rules={rules}
        placeholder={placeholder}
        helperText={helperText}
        slotProps={{ htmlInput: { maxLength: 20 } }}
      />
      <output data-testid="form-value">{methods.watch('name')}</output>
    </FormProvider>
  );
};

const user = userEvent.setup({ delay: null });

describe('ControlledTextField', () => {
  test('renders its label and initial form value', () => {
    render(<TestForm />);

    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveValue('Ada');
    expect(screen.getByTestId('form-value')).toHaveTextContent('Ada');
  });

  test('updates the form value and calls the custom onChange handler', async () => {
    const onChange = vi.fn();
    render(<TestForm onChange={onChange} />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.clear(input);
    await user.type(input, 'Grace');

    expect(input).toHaveValue('Grace');
    expect(screen.getByTestId('form-value')).toHaveTextContent('Grace');
    expect(onChange).toHaveBeenCalled();
  });

  test('shows the validation message for an invalid value', async () => {
    render(<TestForm rules={{ required: 'Name is required' }} />);

    await user.clear(screen.getByRole('textbox', { name: 'Name' }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
  });

  test('shows the helper text when there is no error', () => {
    render(<TestForm helperText="Your full name" />);

    expect(screen.getByText('Your full name')).toBeInTheDocument();
  });

  test('replaces the helper text with the validation message when invalid', async () => {
    render(<TestForm helperText="Your full name" rules={{ required: 'Name is required' }} />);

    await user.clear(screen.getByRole('textbox', { name: 'Name' }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.queryByText('Your full name')).not.toBeInTheDocument();
  });

  test('falls back to the helper text when the validation message is empty', async () => {
    render(<TestForm helperText="Your full name" rules={{ required: true }} />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.clear(input);

    expect(await screen.findByText('Your full name')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  test('keeps caller htmlInput props while shrinking the label for a placeholder', () => {
    render(<TestForm placeholder="Enter a name" />);

    const input = screen.getByRole('textbox', { name: 'Name' });
    expect(input).toHaveAttribute('placeholder', 'Enter a name');
    expect(input).toHaveAttribute('maxlength', '20');
  });
});
