import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import DropZone from '././DropZone';
import '@testing-library/jest-dom';

describe('DropZone', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<DropZone inFile={undefined} fileChange={() => {}} />);
  });
});
