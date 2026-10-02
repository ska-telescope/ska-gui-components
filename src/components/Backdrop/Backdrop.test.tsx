import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Backdrop from '././Backdrop';

describe('Backdrop', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<Backdrop open={false} />);
  });
});
