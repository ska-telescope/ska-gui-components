import type { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { ControlledCheckbox } from './controlledCheckBox';
import { ControlledCheckboxGroup } from './controlledCheckboxGroup';
import { ControlledNumberField } from './controlledNumberField';
import { ControlledRadioButtonGroup } from './controlledRadioGroup';
import { ControlledSelect } from './controlledSelect';
import { ControlledTextField } from './controlledTextField';
import { ControlledTimeField } from './controlledTimeField';

type ControlledFormValues = {
  enabled: boolean;
  count: number | null;
  choice: string;
  name: string;
  startTime: string;
  mode: string;
  polarisations: string[];
};

const ControlledForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm<ControlledFormValues>({
    defaultValues: {
      enabled: true,
      count: 12.74,
      choice: 'option-a',
      name: 'Sample value',
      startTime: '09:30',
      mode: 'standard',
      polarisations: ['I'],
    },
  });

  return (
    <FormProvider {...methods}>
      <Stack spacing={2} sx={{ width: 320, maxWidth: '100%' }}>
        {children}
      </Stack>
    </FormProvider>
  );
};

const OPTIONS = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
];

export default {
  title: 'Example/Controlled Components',
  parameters: {
    layout: 'centered',
  },
};

export const Checkbox = {
  render: () => (
    <ControlledForm>
      <ControlledCheckbox<ControlledFormValues, 'enabled'> name="enabled" label="Enabled" />
    </ControlledForm>
  ),
};

export const NumberField = {
  render: () => (
    <ControlledForm>
      <ControlledNumberField<ControlledFormValues, 'count'>
        name="count"
        label="Count"
        decimalPlaces={3}
        stepSize={0.84934656}
        min={0.84934656}
        max={20 * 0.84934656}
        showArrows
      />
    </ControlledForm>
  ),
};

export const Select = {
  render: () => (
    <ControlledForm>
      <ControlledSelect<ControlledFormValues, 'choice', string>
        name="choice"
        label="Choice"
        options={OPTIONS}
      />
    </ControlledForm>
  ),
};

export const TextField = {
  render: () => (
    <ControlledForm>
      <ControlledTextField<ControlledFormValues, 'name'> name="name" label="Name" />
    </ControlledForm>
  ),
};

export const TimeField = {
  render: () => (
    <ControlledForm>
      <ControlledTimeField<ControlledFormValues, 'startTime'> name="startTime" label="Start time" />
    </ControlledForm>
  ),
};

export const RadioButtonGroup = {
  render: () => (
    <ControlledForm>
      <ControlledRadioButtonGroup
        name="mode"
        title="Mode"
        options={[
          { label: 'Standard', value: 'standard' },
          { label: 'Advanced', value: 'advanced' },
        ]}
        showBorder
      />
    </ControlledForm>
  ),
};

export const CheckboxGroup = {
  render: () => (
    <ControlledForm>
      <ControlledCheckboxGroup
        name="polarisations"
        label="Polarisations"
        columns={2}
        options={['I', 'Q', 'U', 'V'].map((value) => ({ label: value, value }))}
      />
    </ControlledForm>
  ),
};
