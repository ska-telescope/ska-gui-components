import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import { FormProvider, useForm } from 'react-hook-form';
import { ControlledRadioButtonGroup } from './controlledRadioGroup';

const OPTIONS = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
];

const Wrapper = ({
  defaultValue = 'alpha',
  children,
}: {
  defaultValue?: string;
  handleChange?: (value: string) => void;
  children: React.ReactNode;
}) => {
  const methods = useForm({ defaultValues: { testField: defaultValue } });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const user = userEvent.setup({ delay: null });

describe('ControlledRadioButtonGroup', () => {
  test('renders all options with correct labels', () => {
    render(
      <Wrapper>
        <ControlledRadioButtonGroup name="testField" options={OPTIONS} />
      </Wrapper>,
    );

    expect(screen.getByLabelText('Alpha')).toBeInTheDocument();
    expect(screen.getByLabelText('Beta')).toBeInTheDocument();
  });

  test('calls handleChange with the selected value when an option is clicked', async () => {
    const handleChange = vi.fn();

    render(
      <Wrapper defaultValue="alpha">
        <ControlledRadioButtonGroup
          name="testField"
          options={OPTIONS}
          handleChange={handleChange}
        />
      </Wrapper>,
    );

    await user.click(screen.getByLabelText('Beta'));

    expect(handleChange).toHaveBeenCalledWith('beta');
  });

  test('does not throw when handleChange is not provided and an option is clicked', async () => {
    render(
      <Wrapper defaultValue="alpha">
        <ControlledRadioButtonGroup name="testField" options={OPTIONS} />
      </Wrapper>,
    );

    await expect(user.click(screen.getByLabelText('Beta'))).resolves.not.toThrow();
  });
});
