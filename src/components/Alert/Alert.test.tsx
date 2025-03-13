import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Alert, { AlertColorTypes } from '././Alert';
import '@testing-library/jest-dom';

describe('Alert', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <Alert
        ariaDescription="aria Description"
        color={AlertColorTypes.Success}
        testId="AlertTestId"
      />,
    );
  });
});
