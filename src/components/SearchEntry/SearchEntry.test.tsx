import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import SearchEntry from '././SearchEntry';
import '@testing-library/jest-dom';

describe('SearchEntry', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<SearchEntry label={''} value={''} />);
  });
});
