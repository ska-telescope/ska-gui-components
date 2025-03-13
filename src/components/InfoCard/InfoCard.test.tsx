import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import InfoCard from '././InfoCard';
import '@testing-library/jest-dom';

describe('InfoCard', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<InfoCard />);
  });
});
