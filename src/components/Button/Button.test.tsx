import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button, { ButtonColorTypes, ButtonIcons } from '././Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <Button
        ariaDescription="aria Description"
        color={ButtonColorTypes.Success}
        icon={ButtonIcons.Add}
        label="OurButton label"
        testId="ButtonTestId"
        toolTip="Tool tip"
      />,
    );
    expect(screen.getByTestId('ButtonTestId')).toHaveTextContent('OurButton label');
    screen.getByTestId('ButtonTestId').click();
    // expect(mockAction).toBeCalled();
  });
});
