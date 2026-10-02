import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { useForm, FormProvider } from 'react-hook-form';
import { ControlledTimeField } from './controlledTimeField';

const TestForm = ({
  defaultValue = '12:00',
  onChange,
}: {
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const methods = useForm({ defaultValues: { timeField: defaultValue } });
  return (
    <FormProvider {...methods}>
      <ControlledTimeField name="timeField" label="Start time" onChange={onChange} />
    </FormProvider>
  );
};

const user = userEvent.setup({ delay: null });

describe('ControlledTimeField', () => {
  test('renders with the correct label and initial value', () => {
    render(<TestForm defaultValue="09:30" />);
    expect(screen.getByLabelText('Start time')).toBeInTheDocument();
    expect(screen.getByLabelText('Start time')).toHaveValue('09:30');
  });

  test('calls the custom onChange handler when value changes', async () => {
    const onChange = vi.fn();
    render(<TestForm onChange={onChange} />);
    const input = screen.getByLabelText('Start time');
    await user.clear(input);
    await user.type(input, '14:00');
    expect(onChange).toHaveBeenCalled();
  });

  test('renders without arrows by default', () => {
    render(<TestForm />);
    const input = screen.getByLabelText('Start time');
    expect(input).toHaveAttribute('type', 'time');
  });
});
