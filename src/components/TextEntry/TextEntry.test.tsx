import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import TextEntry from '././TextEntry';

describe('TextEntry', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<TextEntry label={''} value={''} />);
  });
});
