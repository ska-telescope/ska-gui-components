import React from 'react';

const SPACER_DEFAULT_SIZE = 90;

export const SPACER_HORIZONTAL = 'horizontal';
export const SPACER_VERTICAL = 'vertical';

interface SpacerProps {
  size?: number;
  axis?: string;
}

export function Spacer({ size = SPACER_DEFAULT_SIZE, axis = SPACER_HORIZONTAL }: SpacerProps) {
  const width = axis === SPACER_VERTICAL ? 1 : size;
  const height = axis === SPACER_HORIZONTAL ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  );
}
