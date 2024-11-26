import React from 'react';
interface DropzoneProps {
  inFile: any;
  fileChange: Function;
  preview?: boolean;
  prompt?: string;
  fileTypes?: string;
  maxFiles?: number;
}
declare const Dropzone: ({
  inFile,
  fileChange,
  preview,
  prompt,
  fileTypes,
  maxFiles,
}: DropzoneProps) => React.JSX.Element;
export default Dropzone;
