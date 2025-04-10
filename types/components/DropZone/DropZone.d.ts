import { Accept } from 'react-dropzone';
interface DropzoneProps {
  inFile: any;
  fileChange: Function;
  preview?: boolean;
  prompt?: string;
  accepted?: Accept;
  maxFiles?: number;
}
declare const Dropzone: ({
  inFile,
  fileChange,
  preview,
  prompt,
  accepted,
  maxFiles,
}: DropzoneProps) => import('react/jsx-runtime').JSX.Element;
export default Dropzone;
