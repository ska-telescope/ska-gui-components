import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import DropDown from '././DropDown';
import '@testing-library/jest-dom';
import { LABEL_POSITION } from '../EntryField/EntryField';

const DUMMY_OPTIONS = [
  { label: 'Option 1', value: '1', disabled: false },
  { label: 'Option 2', value: '2', disabled: false },
  { label: 'Option 3', value: '3', disabled: false },
];

describe('DropDown', () => {
  test('renders correctly', () => {
    render(
      <DropDown
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        disabled={false}
        helperText="HELPER TEXT"
        errorText=""
        label="Label"
        labelBold={false}
        labelPosition={LABEL_POSITION.START}
        labelWidth={4}
        options={DUMMY_OPTIONS}
        required={false}
        value=""
        setValue={undefined}
        testId="testId"
        toolTip="tooltip"
      />,
    );
  });
});
