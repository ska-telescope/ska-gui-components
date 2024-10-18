import { ButtonSizeTypes } from '../Button/Button';
import { FileUpload } from './FileUpload';

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
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadToolTip: 'Upload tooltip',
  },
};
