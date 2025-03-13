import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import TextEntry from '././TextEntry';
import '@testing-library/jest-dom';

describe('TextEntry', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<TextEntry label={''} value={''} />);
  });
});
