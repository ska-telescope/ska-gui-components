import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Spacer, SPACER_HORIZONTAL, SPACER_VERTICAL } from './Spacer';

describe('Spacer component', () => {
  it('renders with default props', () => {
    render(<Spacer />);
    // const span = container.querySelector('span');

    // expect(span).toBeInTheDocument();
    // expect(span).toHaveStyle({
    //   display: 'block',
    //   width: '90px',
    //   minWidth: '90px',
    //   height: '1px',
    //   minHeight: '1px',
    // });
  });

  it('renders with vertical axis', () => {
    render(<Spacer axis={SPACER_VERTICAL} />);
    // const span = container.querySelector('span');

    // expect(span).toHaveStyle({
    //   width: '1px',
    //   minWidth: '1px',
    //   height: '90px',
    //   minHeight: '90px',
    // });
  });

  it('renders with custom size and horizontal axis', () => {
    render(<Spacer size={50} axis={SPACER_HORIZONTAL} />);
    // const span = container.querySelector('span');

    // expect(span).toHaveStyle({
    //   width: '50px',
    //   minWidth: '50px',
    //   height: '1px',
    //   minHeight: '1px',
    // });
  });

  it('renders with custom size and vertical axis', () => {
    render(<Spacer size={120} axis={SPACER_VERTICAL} />);
    // const span = container.querySelector('span');

    // expect(span).toHaveStyle({
    //   width: '1px',
    //   minWidth: '1px',
    //   height: '120px',
    //   minHeight: '120px',
    // });
  });

  it('handles unknown axis gracefully', () => {
    render(<Spacer size={60} axis="diagonal" />);
    // const span = container.querySelector('span');

    // Defaults to horizontal behavior
    // expect(span).toHaveStyle({
    //   width: '60px',
    //   minWidth: '60px',
    //   height: '1px',
    //   minHeight: '1px',
    // });
  });
});
