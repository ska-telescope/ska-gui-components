import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Progress from '././Progress';

describe('Progress', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<Progress />);
  });
});
