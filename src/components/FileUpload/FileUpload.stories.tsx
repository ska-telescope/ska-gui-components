import FileUpload from './FileUpload';

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    chooseDisabled: false,
    chooseFileTypes: '',
    chooseLabel: 'Choose',
    chooseToolTip: 'Choose the file',
    maxFileWidth: 20,
    uploadDisabled: false,
    uploadLabel: 'Upload',
    uploadURL: 'https://httpbin.org/post',
    uploadToolTip: 'Upload tooltip',
  },
};
