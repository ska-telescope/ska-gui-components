import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import TickBox from '././TickBox';

describe('TickBox', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<TickBox />);
  });
});
