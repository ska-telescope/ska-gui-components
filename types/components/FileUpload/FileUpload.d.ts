import React from 'react';
import { ButtonColorTypes, ButtonSizeTypes, ButtonVariantTypes } from '../Button/Button.js';
import { Accept } from 'react-dropzone';
export declare enum FileUploadStatus {
    OK = 0,
    ERROR = 1,
    PENDING = 3,
    INITIAL = 9
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
    setFile?: Function | null;
    setStatus?: Function | null;
    status?: FileUploadStatus;
    uploadColor?: ButtonColorTypes;
    uploadDisabled?: boolean;
    uploadFunction?: Function | null;
    uploadLabel?: string;
    uploadToolTip?: string;
    uploadURL?: string;
    uploadVariant?: ButtonVariantTypes;
    dropzone?: boolean;
    dropzoneAccepted?: Accept;
    dropzoneIcons?: boolean;
    dropzonePreview: boolean;
    dropzonePrompt?: string;
    suffix?: JSX.Element | null;
}
export declare function FileUpload({ buttonSize, chooseColor, chooseDisabled, chooseFileTypes, chooseLabel, chooseToolTip, direction, isMinimal, chooseVariant, file, hideFileName, maxFileWidth, setFile, setStatus, status, testId, clearDisabled, clearLabel, clearToolTip, clearVariant, uploadColor, uploadDisabled, uploadFunction, uploadLabel, uploadToolTip, uploadURL, uploadVariant, dropzone, dropzoneAccepted, dropzoneIcons, dropzonePreview, dropzonePrompt, suffix, }: FileUploadProps): React.JSX.Element;
export default FileUpload;
