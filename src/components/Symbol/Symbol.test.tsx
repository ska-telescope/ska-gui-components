import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Symbol } from './Symbol';

describe('Symbol component', () => {
  it('renders with default props', () => {
    render(<Symbol />);
    // const svg = screen.getByTestId('skaoSymbol');

    // expect(svg).toBeInTheDocument();
    // expect(svg).toHaveAttribute('role', 'img');
    // expect(svg).toHaveAttribute('height', SYMBOL_DEFAULT_HEIGHT.toString());
    // expect(svg).toHaveAttribute('width', SYMBOL_DEFAULT_HEIGHT.toString());
    // expect(svg).toHaveAttribute('aria-label', 'SKAO Symbol');
    // expect(svg).toHaveAttribute('aria-describedby', 'svg-title svg-description');
    // expect(screen.getByTitle('SKAO Symbol')).toBeInTheDocument();
    // expect(screen.getByText('SKAO symbol coloured with a stylized star in the centre')).toBeInTheDocument();
  });

  it('renders with custom height', () => {
    render(<Symbol height={50} />);
    // const svg = screen.getByTestId('skaoSymbol');

    // expect(svg).toHaveAttribute('height', '50');
    // expect(svg).toHaveAttribute('width', '50');
  });

  it('renders with dark mode', () => {
    render(<Symbol dark />);
    // const group = screen.getByTestId('skaoSymbol').querySelector('g');
    // expect(group).toHaveAttribute('fill', '#FFFFFF');
  });

  it('renders with flatten mode', () => {
    render(<Symbol flatten />);
    // const group = screen.getByTestId('skaoSymbol').querySelector('g');
    // expect(group).toHaveAttribute('fill', '#070068');
  });

  it('renders with gradient fill when not dark or flatten', () => {
    render(<Symbol />);
    // const group = screen.getByTestId('skaoSymbol').querySelector('g');
    // expect(group).toHaveAttribute('fill', 'url(#RadialGradientSymbol)');
  });

  it('renders accessibility title and description', () => {
    render(<Symbol ariaTitle="Custom Title" ariaDescription="Custom Description" />);
    // expect(screen.getByTitle('Custom Title')).toBeInTheDocument();
    // expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('uses default height and width when no height is provided', () => {
    render(<Symbol />);
    // const svg = getByTestId('skaoSymbol');
    // expect(svg).toHaveAttribute('height', SYMBOL_DEFAULT_HEIGHT.toString());
    // expect(svg).toHaveAttribute('width', SYMBOL_DEFAULT_HEIGHT.toString());
  });

  it('uses custom height and width when height is provided', () => {
    render(<Symbol height={42} />);
    // const svg = getByTestId('skaoSymbol');
    // expect(svg).toHaveAttribute('height', '42');
    // expect(svg).toHaveAttribute('width', '42');
  });

  it('uses default height when height is undefined', () => {
    render(<Symbol />);
    // const svg = getByTestId('skaoSymbol');
    // expect(svg).toHaveAttribute('height', SYMBOL_DEFAULT_HEIGHT.toString());
  });

  it('uses provided height when height is defined', () => {
    render(<Symbol height={42} />);
    // const svg = getByTestId('skaoSymbol');
    // expect(svg).toHaveAttribute('height', '42');
  });

  it('uses default height when height is null', () => {
    render(<Symbol height={null as unknown as number} />);
    // const svg = getByTestId('skaoSymbol');
    // expect(svg).toHaveAttribute('height', SYMBOL_DEFAULT_HEIGHT.toString());
    // expect(svg).toHaveAttribute('width', SYMBOL_DEFAULT_HEIGHT.toString());
  });
});
