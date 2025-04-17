import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import NumberField from './NumberField';
import '@testing-library/jest-dom';

describe('NumberField', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <NumberField
        disabled={false}
        icon
        prompt="HELPER TEXT"
        title="LABEL"
        width={200}
        fieldName={''}
        setValue={() => {}}
        toolTip="TOOLTIP"
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        errorText=""
        required={false}
        testId="testId"
        value={0}
        minValue={0}
        maxValue={100}
      />,
    );
  });
});
