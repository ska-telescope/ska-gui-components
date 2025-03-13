import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import CopyrightModal from '././CopyrightModal';
import '@testing-library/jest-dom';

describe('CopyrightModal', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<CopyrightModal copyrightFunc={() => {}} show />);
  });
});
