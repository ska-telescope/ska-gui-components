import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import HelpModal, { Help } from '././HelpModal';
import '@testing-library/jest-dom';

const help: Help = {
  content: [],
  component: [],
  showHelp: true,
};

describe('HelpModal', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<HelpModal help={help} helpToggle={() => {}} />);
  });
});
