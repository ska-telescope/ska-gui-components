import type { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { ControlledCheckbox } from './controlledCheckBox';
import { ControlledNumberField } from './controlledNumberField';
import { ControlledRadioButtonGroup } from './controlledRadioGroup';
import { ControlledSelect } from './controlledSelect';
import { ControlledTextField } from './controlledTextField';
import { ControlledTimeField } from './controlledTimeField';

type ControlledFormValues = {
  enabled: boolean;
  count: number;
  choice: string;
  name: string;
  startTime: string;
  mode: string;
};

const ControlledForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm<ControlledFormValues>({
    defaultValues: {
      enabled: true,
      count: 12,
      choice: 'option-a',
      name: 'Sample value',
      startTime: '09:30',
      mode: 'standard',
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
        min={0}
        max={100}
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
