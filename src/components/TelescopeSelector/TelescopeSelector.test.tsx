import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import TelescopeSelector from '././TelescopeSelector';

describe('TelescopeSelector', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <TelescopeSelector
        telescope={{
          code: '',
          name: '',
          location: '',
          position: {
            lat: 0,
            lon: 0,
          },
          image: '',
        }}
        updateTelescope={() => {}}
      />,
    );
  });
});
