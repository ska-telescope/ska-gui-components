import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import TickBox from '././TickBox';
import '@testing-library/jest-dom';

describe('TickBox', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<TickBox />);
  });
});
