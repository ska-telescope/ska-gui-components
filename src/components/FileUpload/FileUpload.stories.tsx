import { ButtonSizeTypes } from '../Button/Button';
import FileUpload from './FileUpload';

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
};

export const Light = {
  args: {
    chooseDisabled: false,
    chooseFileTypes: '',
    chooseLabel: 'Choose',
    chooseSize: ButtonSizeTypes.Medium,
    chooseToolTip: 'Choose the file',
    direction: 'row',
    maxFileWidth: 20,
    clearLabel: 'Clear',
    clearToolTip: 'Clear tooltip',
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadSize: ButtonSizeTypes.Medium,
    uploadToolTip: 'Upload tooltip',
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    chooseDisabled: false,
    chooseFileTypes: '',
    chooseLabel: 'Choose',
    chooseToolTip: 'Choose the file',
    direction: 'row',
    maxFileWidth: 20,
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadToolTip: 'Upload tooltip',
  },
};
