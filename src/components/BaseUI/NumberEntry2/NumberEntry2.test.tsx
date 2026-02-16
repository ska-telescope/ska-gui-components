import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import NumberEntry2 from './NumberEntry2';
import '@testing-library/jest-dom';

describe('NumberEntry2', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <NumberEntry2
        disabled={false}
        icon
        prompt="HELPER TEXT"
        title="LABEL"
        // width={200}
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
