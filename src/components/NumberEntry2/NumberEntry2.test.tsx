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
        prompt="HELPER TEXT"
        title="LABEL"
        width={200}
        required={false}
        testId="testId"
        value={2}
        fieldName={''}
        setValue={() => {}}
      />,
    );
  });
});
