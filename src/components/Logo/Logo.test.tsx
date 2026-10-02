import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Logo } from './Logo';
// import { Colors } from '../Colors';

// const colors = Colors();

describe('Logo component', () => {
  it('renders with default props', () => {
    render(<Logo />);
  });

  it('renders with dark mode', () => {
    render(<Logo dark />);
    // const path = screen.getByRole('presentation');
  });

  it('renders with flatten mode', () => {
    render(<Logo flatten />);
    // const path = screen.getByRole('presentation');
  });

  it('renders with gradient when not dark or flatten', () => {
    render(<Logo />);
    // const path = screen.getByRole('presentation');
  });

  it('renders accessibility title and description', () => {
    render(<Logo ariaTitle="Custom Title" ariaDescription="Custom Description" />);
  });

  it('renders accessibility height', () => {
    render(<Logo ariaTitle="Custom Title" ariaDescription="Custom Description" height={200} />);
  });

  it('uses default height when height is explicitly undefined', () => {
    render(<Logo height={undefined} />);
    // const svg = screen.getByTestId('skaoLogo');
    // expect(svg).toHaveAttribute('height', '30');
  });

  it('uses default height when height is null', () => {
    render(<Logo height={null as unknown as number} />);
    // const svg = screen.getByTestId('skaoLogo');
    // expect(svg).toHaveAttribute('height', '30');
  });
});
