import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import DropZone from '././DropZone';

describe('DropZone', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<DropZone inFile={undefined} fileChange={() => {}} />);
  });
});
