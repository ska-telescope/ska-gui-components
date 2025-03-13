import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import NumberEntry from './NumberEntry';
import '@testing-library/jest-dom';
import { LABEL_POSITION } from '../EntryField/EntryField';

describe('NumberEntry', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <NumberEntry
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        disabled={false}
        errorText=""
        helperText="HELPER TEXT"
        label="LABEL"
        labelPosition={LABEL_POSITION.CONTAINED}
        labelWidth={4}
        onFocus={undefined}
        required={false}
        testId="testId"
        value=""
      />,
    );
  });
});
