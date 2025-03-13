import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Footer from '././Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<Footer />);
  });
});
