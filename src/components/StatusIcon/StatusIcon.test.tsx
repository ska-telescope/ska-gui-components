import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusIcon from '././StatusIcon';
import '@testing-library/jest-dom';

describe('StatusIcon', () => {
  test('renders correctly', () => {
    render(<StatusIcon testId={''} />);
  });

  test('renders question mark for pending level (3) when icon mode is enabled', () => {
    const { container } = render(<StatusIcon testId="statusIcon" icon level={3} size={40} />);

    expect(screen.getByText('?')).toBeInTheDocument();
    expect(container.querySelector('animateTransform')).not.toBeInTheDocument();
  });

  test('renders warning polyline for pending level (3)', () => {
    const { container } = render(<StatusIcon testId="statusIcon" icon level={3} size={40} />);

    expect(container.querySelector('polyline')).toBeInTheDocument();
  });
});
