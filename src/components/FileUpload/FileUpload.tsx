import React from 'react';
import { Grid, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { ButtonColorTypes, ButtonVariantTypes, SKAOButton } from '../Button/Button';
import { StatusIcon } from '../StatusIcon/StatusIcon';

const SIZE = 25;
export const STATUS_OK = 0;
export const STATUS_ERROR = 1;
export const STATUS_PARTIAL = 3;
export const STATUS_INITIAL = 9;

interface FileUploadProps {
  chooseColor?: ButtonColorTypes;
  chooseDisabled?: boolean;
  chooseFileTypes?: string;
  chooseLabel?: string;
  chooseToolTip?: string;
  chooseVariant?: ButtonVariantTypes;
  //
  hideFileName?: boolean;
  maxFileWidth?: number;
  testId?: string;
  //
  setFile?: Function;
  uploadColor?: ButtonColorTypes;
  uploadDisabled?: boolean;
  uploadLabel?: string;
  uploadToolTip?: string;
  uploadURL?: string;
  uploadVariant?: ButtonVariantTypes;
}

export default function FileUpload({
  chooseColor = ButtonColorTypes.Secondary,
  chooseDisabled = false,
  chooseFileTypes = '',
  chooseLabel = 'Choose file',
  chooseToolTip = 'Select to choose a file for upload',
  chooseVariant = ButtonVariantTypes.Contained,
  //
  hideFileName = false,
  maxFileWidth = 20,
  setFile,
  testId = 'fileUpload,',
  //
  uploadColor = ButtonColorTypes.Secondary,
  uploadDisabled = false,
  uploadLabel = 'Upload',
  uploadToolTip = 'Upload the selected file',
  uploadURL = '',
  uploadVariant = ButtonVariantTypes.Contained,
}: FileUploadProps) {
  const [theFile, setTheFile] = React.useState<File | null>(null);
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState(STATUS_INITIAL);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setTheFile(e.target.files[0]);
      setName(e.target.files[0].name);
      setStatus(STATUS_INITIAL);
      if (setFile) {
        setFile(e.target.files[0].name);
      }
    }
  };

  const handleUpload = async () => {
    if (theFile) {
      const formData = new FormData();
      formData.append('file', theFile);
      setStatus(STATUS_PARTIAL);

      try {
        await fetch('https://httpbin.org/post', {
          method: 'POST',
          body: formData,
        });
        setStatus(STATUS_OK);
      } catch (error) {
        setStatus(STATUS_ERROR);
      }
    }
  };

  const displayName = () =>
    name?.length > maxFileWidth ? name.substring(0, maxFileWidth) + '...' : name;

  const getIcon = () => {
    return status === STATUS_INITIAL ? (
      <UploadFileIcon />
    ) : (
      <StatusIcon testId="statusId" icon level={status} size={SIZE} />
    );
  };

  const chooseButton = () => (
    <label htmlFor="uploadFile">
      <input
        style={{ display: 'none' }}
        id="uploadFile"
        name="chooseFileInput"
        type="file"
        accept={chooseFileTypes}
        onChange={handleFileChange}
      />

      <SKAOButton
        ariaDescription={chooseToolTip}
        color={name ? ButtonColorTypes.Inherit : chooseColor}
        component="span"
        disabled={chooseDisabled}
        icon={<SearchIcon />}
        label={chooseLabel}
        testId={testId + 'ChooseButton'}
        toolTip={chooseToolTip}
        variant={chooseVariant}
      />
    </label>
  );

  const showFileName = () => (
    <Typography pt={1} testId={testId + 'Filename'} variant="body1">
      {name?.length ? displayName() : ''}
    </Typography>
  );

  const uploadButton = () => (
    <SKAOButton
      ariaDescription={uploadToolTip}
      color={status === STATUS_INITIAL ? uploadColor : ButtonColorTypes.Inherit}
      component="span"
      disabled={uploadDisabled || uploadURL.length === 0}
      icon={getIcon()}
      label={uploadLabel}
      onClick={handleUpload}
      testId={testId + 'UploadButton'}
      toolTip={uploadToolTip}
      variant={uploadVariant}
    />
  );

  return (
    <Grid container direction="row" justifyContent="space-evenly" spacing={1}>
      <Grid item>{chooseButton()}</Grid>
      <Grid item>{!hideFileName && showFileName()}</Grid>
      <Grid item>{theFile && uploadButton()}</Grid>
    </Grid>
  );
}
