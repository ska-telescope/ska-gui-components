import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import FileUpload, { FileUploadStatus } from '././FileUpload';

describe('FileUpload', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(<FileUpload dropzonePreview={false} testId={''} />);
  });
  test('renders correctly (minimal)', () => {
    render(<FileUpload dropzonePreview={false} isMinimal testId={''} />);
  });

  test('hides clear button after successful upload when hideClearAfterUpload is true', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });

    render(
      <FileUpload
        file={file}
        status={FileUploadStatus.OK}
        hideClearAfterUpload
        dropzonePreview={false}
        testId="fileUpload"
      />,
    );

    expect(screen.queryByTestId('fileUploadClearButton')).not.toBeInTheDocument();
  });
});
