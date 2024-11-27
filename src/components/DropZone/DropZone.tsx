import React from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import useTheme from '@mui/material/styles/useTheme';

const activeDropzoneStyle = {
  borderColor: '#00adb5',
};

const ImagePreview = {
  display: 'flex',
  maxWidth: '100%',
  maxHeight: '100%',
  margin: 'auto',
  borderRadius: '2px',
};

interface DropzoneProps {
  inFile: any;
  fileChange: Function;
  preview?: boolean;
  prompt?: string;
  accepted?: Accept;
  maxFiles?: number;
}

const Dropzone = ({
  inFile,
  fileChange,
  preview = true,
  prompt = 'Drag and drop your files here, or click to select files',
  accepted = {
    '*/*': ['.*'],
  },
  maxFiles = 1,
}: DropzoneProps) => {
  const theme = useTheme();

  const dropzoneStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    marginTop: '2rem',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: theme.palette.secondary.main,
    borderStyle: 'dashed',
    outline: 'none',
    transition: 'border 0.24s ease-in-out',
    cursor: 'pointer',
  };

  const [files, setFiles] = React.useState([]);
  const onDrop = React.useCallback((acceptedFiles: any) => {
    fileChange(acceptedFiles);
    setFiles(
      acceptedFiles.map((file: Blob | MediaSource) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);

  React.useEffect(() => {
    if (!inFile) {
      setFiles([]);
    }
  }, [inFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accepted,
    maxFiles: maxFiles,
  });

  const fileList = files.map((file) => (
    <li key={file['name']}>
      {preview && <img style={ImagePreview} src={file['preview']} alt={file['name']} />}
      <span>{file['name']}</span>
    </li>
  ));

  const activeStyle = { ...dropzoneStyle, ...activeDropzoneStyle };

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        marginTop: '2rem',
        borderWidth: '2px',
        borderRadius: '2px',
        borderColor: theme.palette.secondary.main,
        borderStyle: 'dashed',
        outline: 'none',
        transition: 'border 0.24s ease-in-out',
        cursor: 'pointer',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {prompt}
      <ul>{fileList}</ul>
    </div>
  );
};

export default Dropzone;
