import React from 'react';
import { Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes, OurButton } from '../Button/Button';
import { StatusIcon } from '../StatusIcon/StatusIcon';

const SIZE = 25;

export enum FileUploadStatus {
  OK = 0,
  ERROR = 1,
  PENDING = 3,
  INITIAL = 9,
}

interface FileUploadProps {
  buttonSize?: ButtonSizeTypes;
  chooseColor?: ButtonColorTypes;
  chooseDisabled?: boolean;
  chooseFileTypes?: string;
  chooseLabel?: string;
  chooseToolTip?: string;
  chooseVariant?: ButtonVariantTypes;
  direction?: 'row' | 'column';
  file?: File;
  //
  hideFileName?: boolean;
  maxFileWidth?: number;
  testId?: string;
  //
  clearLabel?: string;
  clearToolTip?: string;
  clearVariant?: ButtonVariantTypes;
  setFile?: Function | null;
  setStatus?: Function | null;
  uploadColor?: ButtonColorTypes;
  uploadDisabled?: boolean;
  uploadFunction?: Function | null;
  uploadLabel?: string;
  uploadToolTip?: string;
  uploadURL?: string;
  uploadVariant?: ButtonVariantTypes;
}

export default function FileUpload({
  buttonSize = ButtonSizeTypes.Medium,
  chooseColor = ButtonColorTypes.Secondary,
  chooseDisabled = false,
  chooseFileTypes = '',
  chooseLabel = 'Choose file',
  chooseToolTip = 'Select to choose a file for upload',
  chooseVariant = ButtonVariantTypes.Contained,
  direction = 'row',
  //
  file,
  hideFileName = false,
  maxFileWidth = 20,
  setFile,
  setStatus,
  testId = 'fileUpload,',
  //
  clearLabel = 'Upload',
  clearToolTip = 'Clear the selected file',
  clearVariant = ButtonVariantTypes.Contained,
  uploadColor = ButtonColorTypes.Secondary,
  uploadDisabled = false,
  uploadFunction,
  uploadLabel = 'Upload',
  uploadToolTip = 'Upload the selected file',
  uploadURL = 'https://httpbin.org/post',
  uploadVariant = ButtonVariantTypes.Contained,
}: FileUploadProps) {
  const [theFile, setTheFile] = React.useState<File | null>(null);
  const [name, setName] = React.useState('');
  const [state, setState] = React.useState(FileUploadStatus.INITIAL);

  React.useEffect(() => {
    if (file) {
      setTheFile(file);
      setName(file.name);
    }
  }, []);

  const setTheStatus = (e: FileUploadStatus) => {
    if (setStatus) {
      setStatus(e);
    }
    setState(e);
  };

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setTheFile(e.target.files[0]);
      setName(e.target.files[0].name);
      setTheStatus(FileUploadStatus.INITIAL);
      if (setFile) {
        setFile(e.target.files[0].name);
      }
    }
  };

  const handleClear = () => {
    setTheFile(null);
    setName('');
    setTheStatus(FileUploadStatus.INITIAL);
    if (setFile) {
      setFile('');
    }
  };

  const handleUpload = () => {
    if (uploadFunction) {
      uploadFunction(theFile);
    } else {
      handleUploadFunction();
    }
  };

  const handleUploadFunction = async () => {
    if (theFile) {
      const formData = new FormData();
      formData.append('file', theFile);
      setTheStatus(FileUploadStatus.PENDING);

      try {
        await fetch(uploadURL, {
          method: 'POST',
          body: formData,
        });
        setTheStatus(FileUploadStatus.OK);
      } catch (error) {
        setTheStatus(FileUploadStatus.ERROR);
      }
    }
  };

  const displayName = () =>
    name?.length > maxFileWidth ? name.substring(0, maxFileWidth) + '...' : name;

  const getClearIcon = () => {
    return <ClearIcon />;
  };

  const getUploadIcon = () => {
    return state === FileUploadStatus.INITIAL ? (
      <UploadFileIcon />
    ) : (
      <StatusIcon testId="statusId" icon level={state} size={SIZE} />
    );
  };

  const ChooseButton = () => (
    <label htmlFor="uploadFile">
      <input
        style={{ display: 'none' }}
        id="uploadFile"
        name="chooseFileInput"
        type="file"
        accept={chooseFileTypes}
        onChange={handleFileChange}
      />

      <OurButton
        ariaDescription={chooseToolTip}
        color={name ? ButtonColorTypes.Inherit : chooseColor}
        component="span"
        disabled={chooseDisabled}
        icon={<SearchIcon />}
        label={chooseLabel}
        size={buttonSize}
        testId={testId + 'ChooseButton'}
        toolTip={chooseToolTip}
        variant={chooseVariant}
      />
    </label>
  );

  const showFileName = () => (
    <Typography pt={1} testid={testId + 'Filename'} variant="body1">
      {name?.length ? displayName() : ''}
    </Typography>
  );

  const UploadButton = () => (
    <OurButton
      ariaDescription={uploadToolTip}
      color={state === FileUploadStatus.INITIAL ? uploadColor : ButtonColorTypes.Inherit}
      component="span"
      disabled={uploadDisabled || uploadURL.length === 0}
      icon={getUploadIcon()}
      label={uploadLabel}
      onClick={handleUpload}
      size={buttonSize}
      testId={testId + 'UploadButton'}
      toolTip={uploadToolTip}
      variant={uploadVariant}
    />
  );

  const ClearButton = () => (
    <OurButton
      ariaDescription={clearToolTip}
      color={ButtonColorTypes.Inherit}
      component="span"
      disabled={uploadDisabled || uploadURL.length === 0}
      icon={getClearIcon()}
      label={clearLabel}
      onClick={handleClear}
      size={buttonSize}
      testId={testId + 'ClearButton'}
      toolTip={clearToolTip}
      variant={clearVariant}
    />
  );

  return (
    <Grid container direction={direction} justifyContent="space-evenly" spacing={1}>
      <Grid item>{ChooseButton()}</Grid>
      <Grid item>{!hideFileName && showFileName()}</Grid>
      <Grid item>{theFile && UploadButton()}</Grid>
      <Grid item>{theFile && ClearButton()}</Grid>
    </Grid>
  );
}
