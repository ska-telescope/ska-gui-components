/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearIcon from '../Icons/classic/ClearIcon';
import FileUploadIcon from '../Icons/classic/FileUploadIcon';
import SearchIcon from '../Icons/classic/SearchIcon';
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes, OurButton } from '../Button/Button';
import { StatusIcon } from '../StatusIcon/StatusIcon';
import OurIconButton from '../IconButton/IconButton';
import SKAOAlert, { AlertColorTypes } from '../Alert/Alert';
import DropZone from '../DropZone/DropZone';
import { Accept } from 'react-dropzone/';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
  isMinimal?: boolean;
  hideFileName?: boolean;
  maxFileWidth?: number;
  testId: string;
  clearLabel?: string;
  clearDisabled?: boolean;
  clearToolTip?: string;
  clearVariant?: ButtonVariantTypes;
  setFile?: (file: File | string) => void;
  setStatus?: (status: FileUploadStatus) => void;
  status?: FileUploadStatus;
  uploadColor?: ButtonColorTypes;
  uploadDisabled?: boolean;
  uploadFunction?: (file: File | string | null) => void;
  uploadLabel?: string;
  uploadToolTip?: string;
  uploadURL?: string;
  uploadVariant?: ButtonVariantTypes;
  dropzone?: boolean;
  dropzoneAccepted?: Accept;
  dropzoneIcons?: boolean;
  dropzonePreview?: boolean;
  dropzonePrompt?: string;
  suffix?: React.JSX.Element | null;
}

export function FileUpload({
  buttonSize = ButtonSizeTypes.Medium,
  chooseColor = ButtonColorTypes.Secondary,
  chooseDisabled = false,
  chooseFileTypes = '',
  chooseLabel = 'Choose file',
  chooseToolTip = 'Select to choose a file for upload',
  direction = 'row',
  isMinimal = false,
  chooseVariant = isMinimal ? ButtonVariantTypes.Text : ButtonVariantTypes.Contained,
  file,
  hideFileName = false,
  maxFileWidth = 20,
  setFile,
  setStatus,
  status,
  testId = 'fileUpload-testId',
  clearDisabled = false,
  clearLabel = 'Clear',
  clearToolTip = 'Clear the selected file',
  clearVariant = ButtonVariantTypes.Contained,
  uploadColor = ButtonColorTypes.Secondary,
  uploadDisabled = false,
  uploadFunction,
  uploadLabel = 'Upload',
  uploadToolTip = 'Upload the selected file',
  uploadURL = 'https://httpbin.org/post',
  uploadVariant = ButtonVariantTypes.Contained,
  dropzone = false,
  dropzoneAccepted,
  dropzoneIcons = true,
  dropzonePreview = true,
  dropzonePrompt = '',
  suffix = null,
}: FileUploadProps) {
  const theme = useTheme();

  const [theFile, setTheFile] = React.useState<File | null>(null);
  const [name, setName] = React.useState('');
  const [state, setState] = React.useState(FileUploadStatus.INITIAL);

  React.useEffect(() => {
    if (file) {
      setTheFile(file);
      setName(file.name);
    }
  }, [file]);

  const setTheStatus = (e: FileUploadStatus) => {
    if (setStatus) {
      setStatus(e);
    } else {
      setState(e);
    }
  };

  const handleFileChange = (e: any) => {
    const inFiles = dropzone ? e : e.target.files;
    if (inFiles?.[0]) {
      setTheFile(inFiles[0]);
      setName(inFiles[0].name);
      setTheStatus(FileUploadStatus.INITIAL);
      setFile?.(inFiles[0]);
      if (isMinimal) {
        uploadFunction?.(inFiles[0]) ?? handleUploadFunction(inFiles[0]);
      }
    }
  };

  const handleClear = () => {
    setTheFile(null);
    setName('');
    setTheStatus(FileUploadStatus.INITIAL);
    setFile?.('');
  };

  const handleUpload = () => {
    uploadFunction?.(theFile) ?? handleUploadFunction(theFile);
  };

  const handleUploadFunction = async (inFile: File | string | null) => {
    if (!inFile) return;
    const formData = new FormData();
    formData.append('file', inFile as Blob);
    setTheStatus(FileUploadStatus.PENDING);
    try {
      await fetch(uploadURL!, { method: 'POST', body: formData });
      setTheStatus(FileUploadStatus.OK);
    } catch {
      setTheStatus(FileUploadStatus.ERROR);
    }
  };

  const displayName = () =>
    name?.length > maxFileWidth ? name.substring(0, maxFileWidth) + '...' : name;

  const getClearIcon = () => <ClearIcon colorFG={theme.palette.secondary.main} />;

  const getUploadIcon = () => {
    const val = status ?? state;
    return val === FileUploadStatus.INITIAL ? (
      <FileUploadIcon colorFG={theme.palette.secondary.main} />
    ) : (
      <StatusIcon testId="statusId" icon level={val} size={isMinimal ? 26 : 20} />
    );
  };

  const getAlertColor = () => {
    const val = status ?? state;
    switch (val) {
      case FileUploadStatus.PENDING:
        return AlertColorTypes.Warning;
      case FileUploadStatus.OK:
        return AlertColorTypes.Success;
      default:
        return AlertColorTypes.Error;
    }
  };

  const ChooseButton = () => (
    <label htmlFor={testId}>
      <input
        style={{ display: 'none' }}
        id={testId}
        name="chooseFileInput"
        type="file"
        accept={chooseFileTypes}
        onChange={handleFileChange}
      />
      <OurButton
        ariaDescription={chooseToolTip}
        color={isMinimal ? ButtonColorTypes.Inherit : name ? ButtonColorTypes.Inherit : chooseColor}
        component="span"
        disabled={chooseDisabled}
        icon={
          isMinimal ? (
            getUploadIcon()
          ) : (
            <SearchIcon colorFG={theme.palette.secondary.contrastText} />
          )
        }
        label={isMinimal ? '' : chooseLabel}
        size={buttonSize}
        testId={isMinimal ? testId + 'ChooseIcon' : testId + 'ChooseButton'}
        toolTip={chooseToolTip}
        variant={chooseVariant}
      />
    </label>
  );

  const showFileName = () => (
    <Typography pt={1} data-testid={testId + 'Filename'} sx={{ width: '200px' }} variant="body1">
      {name?.length ? displayName() : ''}
    </Typography>
  );

  const UploadButton = () =>
    dropzone && dropzoneIcons ? (
      <OurIconButton
        ariaDescription={uploadToolTip}
        icon={getUploadIcon()}
        onClick={handleUpload}
        testId={testId + 'UploadIcon'}
        toolTip={uploadToolTip}
      />
    ) : (
      <OurButton
        ariaDescription={uploadToolTip}
        color={state === FileUploadStatus.INITIAL ? uploadColor : ButtonColorTypes.Inherit}
        component="span"
        disabled={uploadDisabled || !uploadURL}
        icon={getUploadIcon()}
        label={uploadLabel}
        onClick={handleUpload}
        size={buttonSize}
        testId={testId + 'UploadButton'}
        toolTip={uploadToolTip}
        variant={uploadVariant}
      />
    );

  const ClearButton = () =>
    (dropzone && dropzoneIcons) || isMinimal ? (
      <OurIconButton
        ariaDescription={clearToolTip}
        icon={getClearIcon()}
        onClick={handleClear}
        testId={testId + 'ClearIcon'}
        toolTip={clearToolTip}
      />
    ) : (
      <OurButton
        ariaDescription={clearToolTip}
        color={ButtonColorTypes.Inherit}
        component="span"
        disabled={clearDisabled}
        icon={getClearIcon()}
        label={isMinimal ? '' : clearLabel}
        onClick={handleClear}
        size={buttonSize}
        testId={testId + 'ClearButton'}
        toolTip={clearToolTip}
        variant={clearVariant}
      />
    );

  return (
    <>
      {dropzone && (
        <>
          <DropZone
            accepted={dropzoneAccepted}
            inFile={file}
            fileChange={handleFileChange}
            preview={dropzonePreview}
            prompt={dropzonePrompt}
          />

          <Grid
            p={0}
            container
            direction="row"
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
              <Grid
                spacing={1}
                pt={1}
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                  {theFile && ClearButton()}
                </Item>
                <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                  {theFile && UploadButton()}
                </Item>
              </Grid>
            </Item>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{suffix}</Item>
          </Grid>
        </>
      )}

      {!dropzone && isMinimal && (
        <SKAOAlert color={getAlertColor()} testId="testId">
          <Grid p={0} container direction={direction} alignItems="baseline" justifyContent="center">
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{ChooseButton()}</Item>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{showFileName()}</Item>
            {theFile && (
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{ClearButton()}</Item>
            )}
            {suffix && <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{suffix}</Item>}
          </Grid>
        </SKAOAlert>
      )}

      {!dropzone && !isMinimal && (
        <Grid p={0} container direction={direction} justifyContent="space-evenly" spacing={1}>
          <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{ChooseButton()}</Item>
          {!hideFileName && (
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{showFileName()}</Item>
          )}
          {theFile && (
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{ClearButton()}</Item>
          )}
          {theFile && (
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{UploadButton()}</Item>
          )}
          {suffix && <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>{suffix}</Item>}
        </Grid>
      )}
    </>
  );
}

export default FileUpload;
