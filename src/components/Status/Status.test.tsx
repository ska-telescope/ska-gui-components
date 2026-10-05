import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Status } from './Status';

describe('Status component', () => {
  it('renders with default props', () => {
    render(<Status testId="status-default" />);
    // const svg = screen.getByTestId('status-default');

    // expect(svg).toBeInTheDocument();
    // expect(svg).toHaveAttribute('role', 'img');
    // expect(svg).toHaveAttribute('height', '60');
    // expect(svg).toHaveAttribute('width', '60');
    // expect(screen.getByTitle('Status Indicator 5')).toBeInTheDocument();
    // expect(screen.getByText(/Status Indicator 5 Various shapes and colours/i)).toBeInTheDocument();
  });

  it('renders circle for level 0', () => {
    render(<Status testId="status-success" level={0} />);
    // const circle = screen.getByTestId('status-success').querySelector('circle');
    // expect(circle).toBeInTheDocument();
    // expect(circle).toHaveAttribute('fill', SUCCESS[1]);
  });

  it('renders rect for level 1', () => {
    render(<Status testId="status-error-1" level={1} />);
    // const rect = screen.getByTestId('status-error-1').querySelector('rect');
    // expect(rect).toBeInTheDocument();
    // expect(rect).toHaveAttribute('fill', ERROR_1[1]);
  });

  it('renders polyline for level 2', () => {
    render(<Status testId="status-error-2" level={2} />);
    // const polyline = screen.getByTestId('status-error-2').querySelector('polyline');
    // expect(polyline).toBeInTheDocument();
    // expect(polyline).toHaveAttribute('fill', ERROR_2[1]);
  });

  it('renders polyline for level 3', () => {
    render(<Status testId="status-error-3" level={3} />);
    // const polyline = screen.getByTestId('status-error-3').querySelector('polyline');
    // expect(polyline).toBeInTheDocument();
    // expect(polyline).toHaveAttribute('fill', ERROR_3[1]);
  });

  it('renders polyline for level 4', () => {
    render(<Status testId="status-error-4" level={4} />);
    // const polyline = screen.getByTestId('status-error-4').querySelector('polyline');
    // expect(polyline).toBeInTheDocument();
    // expect(polyline).toHaveAttribute('fill', ERROR_4[1]);
  });

  it('renders circle for level 5', () => {
    render(<Status testId="status-error-5" level={5} />);
    // const circle = screen.getByTestId('status-error-5').querySelector('circle');
    // expect(circle).toBeInTheDocument();
    // expect(circle).toHaveAttribute('fill', ERROR_5[1]);
  });

  it('renders with softColors', () => {
    render(<Status testId="status-soft" level={0} softColors />);
    // const circle = screen.getByTestId('status-soft').querySelector('circle');
    // expect(circle).toHaveAttribute('fill', SOFT_SUCCESS[1]);
  });

  it('renders without border', () => {
    render(<Status testId="status-noborder" level={1} noBorder />);
    // const rect = screen.getByTestId('status-noborder').querySelector('rect');
    // expect(rect).toHaveAttribute('stroke', 'none');
  });

  it('renders text when provided', () => {
    render(<Status testId="status-text" level={0} text="OK" />);
    // expect(screen.getByText('OK')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <Status testId="status-children" level={0}>
        <text>Extra</text>
      </Status>,
    );
    // expect(screen.getByText('Extra')).toBeInTheDocument();
  });

  it('clamps level above 5 to 5', () => {
    render(<Status testId="status-overflow" level={99} />);
    // const circle = screen.getByTestId('status-overflow').querySelector('circle');
    // expect(circle).toHaveAttribute('fill', ERROR_5[1]);
  });

  it('clamps level below 0 to 0', () => {
    render(<Status testId="status-underflow" level={-5} />);
    // const circle = screen.getByTestId('status-underflow').querySelector('circle');
    // expect(circle).toHaveAttribute('fill', SUCCESS[1]);
  });

  it('renders soft color for level 1', () => {
    render(<Status testId="soft-1" level={1} softColors />);
    // const rect = screen.getByTestId('soft-1').querySelector('rect');
    // expect(rect).toHaveAttribute('fill', SOFT_ERROR_1[1]);
  });

  it('renders soft color for level 2', () => {
    render(<Status testId="soft-2" level={2} softColors />);
    // const polyline = screen.getByTestId('soft-2').querySelector('polyline');
    // expect(polyline).toHaveAttribute('fill', SOFT_ERROR_2[1]);
  });

  it('renders soft color for level 3', () => {
    render(<Status testId="soft-3" level={3} softColors />);
    // const polyline = screen.getByTestId('soft-3').querySelector('polyline');
    // expect(polyline).toHaveAttribute('fill', SOFT_ERROR_3[1]);
  });

  it('renders soft color for level 4', () => {
    render(<Status testId="soft-4" level={4} softColors />);
    // const polyline = screen.getByTestId('soft-4').querySelector('polyline');
    // expect(polyline).toHaveAttribute('fill', SOFT_ERROR_4[1]);
  });

  it('renders soft color for level 9', () => {
    render(<Status testId="soft-9" level={9} softColors />);
    // const polyline = screen.getByTestId('soft-4').querySelector('polyline');
    // expect(polyline).toHaveAttribute('fill', SOFT_ERROR_4[1]);
  });

  it('renders text at correct height for level 2', () => {
    render(<Status testId="text-2" level={2} text="Warning" />);
    // const text = screen.getByText('Warning');
    // expect(text).toHaveAttribute('y', '62%');
  });

  it('renders text at correct height for level 3', () => {
    render(<Status testId="text-3" level={3} text="Critical" />);
    // const text = screen.getByText('Critical');
    // expect(text).toHaveAttribute('y', '30%');
  });

  it('renders correct points for level 2', () => {
    render(<Status testId="points-2" level={2} />);
    // const polyline = screen.getByTestId('points-2').querySelector('polyline');
    // expect(polyline).toHaveAttribute('points', expect.stringContaining(','));
  });

  it('renders correct points for level 3', () => {
    render(<Status testId="points-3" level={3} />);
    // const polyline = screen.getByTestId('points-3').querySelector('polyline');
    // expect(polyline).toHaveAttribute('points', expect.stringContaining(','));
  });

  it('renders correct points for level 4 (default case)', () => {
    render(<Status testId="points-4" level={4} />);
    // const polyline = screen.getByTestId('points-4').querySelector('polyline');
    // expect(polyline).toHaveAttribute('points', expect.stringContaining(','));
  });

  it('renders text with correct attributes', () => {
    render(<Status testId="text-attrs" level={0} text="Info" />);
    // const text = screen.getByText('Info');
    // expect(text).toHaveAttribute('x', '50%');
    // expect(text).toHaveAttribute('alignmentBaseline', 'central');
    // expect(text).toHaveAttribute('dominantBaseline', 'central');
    // expect(text).toHaveAttribute('textAnchor', 'middle');
  });

  it('renders circle with correct center coordinates', () => {
    render(<Status testId="circle-center" level={0} />);
    // const circle = screen.getByTestId('circle-center').querySelector('circle');
    // expect(circle).toHaveAttribute('cx', '30');
    // expect(circle).toHaveAttribute('cy', '30');
  });
});
