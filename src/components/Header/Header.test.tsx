import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import Header from '././Header';
import '@testing-library/jest-dom';
import { Help } from '../HelpModal/HelpModal';

const help: Help = {
  content: 'CONTENT',
  component: 'COMPONENT',
  showHelp: true,
};
describe('Header', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <Header
        storage={{
          help: help,
          helpToggle: () => {},
          telescope: {
            code: '',
            name: '',
            location: '',
            position: {
              lat: 0,
              lon: 0,
            },
            image: '',
          },
          themeMode: 'dark',
          toggleTheme: () => {},
        }}
      />,
    );
  });
});
