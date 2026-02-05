import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import FileUpload from '././FileUpload';
import '@testing-library/jest-dom';

describe('FileUpload', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<FileUpload dropzonePreview={false} testId={''} />);
  });
  test('renders correctly (minimal)', () => {
    render(<FileUpload dropzonePreview={false} isMinimal testId={''} />);
  });
});
