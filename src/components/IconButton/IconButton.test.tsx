import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import IconButton from '././IconButton';
import '@testing-library/jest-dom';
import AddIcon from 'components/Icons/classic/AddIcon';

describe('IconButton', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<IconButton icon={<AddIcon />} />);
  });
});
