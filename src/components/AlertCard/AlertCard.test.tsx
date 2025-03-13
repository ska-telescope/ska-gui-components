import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import AlertCard from '././AlertCard';
import { ALERT_DATA } from './AlertData';
import '@testing-library/jest-dom';

describe('AlertCard', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <AlertCard ariaDescription="aria Description" array={ALERT_DATA} testId="AlertCardTestId" />,
    );
  });
});
