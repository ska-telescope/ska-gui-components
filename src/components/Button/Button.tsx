import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { ElementType } from '@react-spring/web';
//
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import PublishIcon from '@mui/icons-material/Publish';
import EmailIcon from '@mui/icons-material/Email';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export enum ButtonColorTypes {
  Error = 'error',
  Inherit = 'inherit',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

export enum ButtonSizeTypes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonVariantTypes {
  Contained = 'contained',
  Outlined = 'outlined',
  Text = 'text',
}

export enum ButtonIcons {
  Add = 'add',
  Cancel = 'cancel',
  Confirm = 'confirm',
  Delete = 'delete',
  Download = 'download',
  Email = 'email',
  Home = 'home',
  Location = 'location',
  Login = 'login',
  Logout = 'logout',
  Next = 'next',
  PDF = 'pdf',
  Previous = 'previous',
  Save = 'save',
  Search = 'search',
  Submit = 'submit',
  Upload = 'upload',
  Validate = 'validate',
}

export interface ButtonProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  component?: string;
  disabled?: boolean;
  icon?: React.JSX.Element | string;
  label: string;
  onClick?: Function;
  size?: ButtonSizeTypes;
  testId: string;
  toolTip?: string;
  variant?: ButtonVariantTypes;
}

export function OurButton({
  ariaDescription = 'Button',
  color = ButtonColorTypes.Success,
  component = 'button',
  disabled = false,
  icon,
  label,
  onClick,
  size = ButtonSizeTypes.Medium,
  testId = 'buttton-' + label,
  toolTip = '',
  variant = ButtonVariantTypes.Outlined,
}: ButtonProps): React.JSX.Element {
  const clicked = (e: any) => (typeof onClick !== 'undefined' ? onClick(e) : null);

  const fetchIcon = () => {
    switch (icon) {
      case ButtonIcons.Add:
        return <AddIcon />;
      case ButtonIcons.Cancel:
        return <ClearIcon />;
      case ButtonIcons.Confirm:
        return <CheckIcon />;
      case ButtonIcons.Delete:
        return <DeleteIcon />;
      case ButtonIcons.Download:
        return <DownloadIcon />;
      case ButtonIcons.Email:
        return <EmailIcon />;
      case ButtonIcons.Home:
        return <HomeIcon />;
      case ButtonIcons.Login:
        return <LoginIcon />;
      case ButtonIcons.Logout:
        return <LogoutIcon />;
      case ButtonIcons.Location:
        return <MyLocationIcon />;
      case ButtonIcons.Next:
        return <ArrowForwardIosIcon />;
      case ButtonIcons.PDF:
        return <PictureAsPdfIcon />;
      case ButtonIcons.Previous:
        return <ArrowBackIosIcon />;
      case ButtonIcons.Save:
        return <SaveIcon />;
      case ButtonIcons.Search:
        return <SearchIcon />;
      case ButtonIcons.Submit:
        return <PublishIcon />;
      case ButtonIcons.Upload:
        return <UploadFileIcon />;
      case ButtonIcons.Validate:
        return <FactCheckIcon />;
      default:
        return null;
    }
  };

  const getIcon = () => {
    return typeof icon === 'string' ? fetchIcon() : icon;
  };

  return (
    <Tooltip title={toolTip} arrow>
      <span>
        <Button
          aria-label={label}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          color={color}
          component={component as ElementType}
          data-testid={testId.length > 0 ? testId : 'button-' + label}
          disabled={disabled}
          onClick={(e: any) => clicked(e)}
          role="button"
          size={size}
          startIcon={getIcon()}
          type="submit"
          variant={variant}
        >
          {label}
        </Button>
      </span>
    </Tooltip>
  );
}

export default OurButton;
