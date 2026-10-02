import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '././Footer';

describe('Footer', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<Footer />);
  });
});
