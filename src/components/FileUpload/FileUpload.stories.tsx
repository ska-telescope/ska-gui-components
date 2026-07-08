import React from 'react';
import { ButtonSizeTypes } from '../Button/Button';
import { FileUpload, FileUploadStatus } from './FileUpload';

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
};

export const Light = {
  args: {
    buttonSize: ButtonSizeTypes.Medium,
    chooseDisabled: false,
    chooseFileTypes: '',
    chooseLabel: 'Choose',
    chooseToolTip: 'Choose the file',
    direction: 'row',
    maxFileWidth: 20,
    theFile: 'filename.pdf',
    clearLabel: 'Clear',
    clearToolTip: 'Clear tooltip',
    hideClearAfterUpload: false,
    dropzone: true,
    dropzonePreview: true,
    dropzonePrompt: 'DROP HERE',
    file: 'filename.pdf',
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadToolTip: 'Upload tooltip',
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    chooseSize: ButtonSizeTypes.Medium,
    chooseDisabled: false,
    chooseFileTypes: '',
    chooseLabel: 'Choose',
    chooseToolTip: 'Choose the file',
    direction: 'row',
    maxFileWidth: 20,
    theFile: 'filename.pdf',
    hideClearAfterUpload: false,
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadToolTip: 'Upload tooltip',
  },
};

export const HideClearAfterUpload = {
  args: {
    dropzone: false,
    dropzonePreview: false,
    chooseLabel: 'Choose',
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    clearLabel: 'Clear',
    hideClearAfterUpload: true,
  },
};

export const SlowUploadSpinner = {
  render: (args: any) => {
    const [status, setStatus] = React.useState(FileUploadStatus.INITIAL);

    const delayedUpload = async () => {
      setStatus(FileUploadStatus.PENDING);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setStatus(FileUploadStatus.OK);
    };

    return (
      <FileUpload
        {...args}
        dropzone={false}
        status={status}
        setStatus={setStatus}
        uploadFunction={delayedUpload}
      />
    );
  },
  args: {
    dropzone: false,
    dropzonePreview: false,
    chooseLabel: 'Choose',
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    clearLabel: 'Clear',
    hideClearAfterUpload: true,
  },
};
