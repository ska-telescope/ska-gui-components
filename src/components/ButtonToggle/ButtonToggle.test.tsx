import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import ButtonToggle from '././ButtonToggle';
import '@testing-library/jest-dom';

const telescope = { id: 'low', Label: 'SKA LOW' };
const telescopeList = [
  { id: 'low', label: 'SKA LOW', value: null },
  { id: 'mid', label: 'SKA MID', value: null },
];

describe('ButtonToggle', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <ButtonToggle
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        current={telescope.id}
        value={telescope}
        options={telescopeList}
        testId="testId"
        toolTip="Tool tip"
      />,
    );
  });
});
