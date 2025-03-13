import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import StatusIcon from '././StatusIcon';
import '@testing-library/jest-dom';

describe('StatusIcon', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<StatusIcon testId={''} />);
  });
});
