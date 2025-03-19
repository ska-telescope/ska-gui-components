import React, { JSX } from 'react';
import { Button, Tooltip } from '@mui/material';
import { ElementType } from '@react-spring/web';
//
import AddIcon from '../Icons/classic/AddIcon';
import ClearIcon from '../Icons/classic/ClearIcon';
import TickIcon from '../Icons/classic/TickIcon';
import DeleteIcon from '../Icons/classic/DeleteIcon';
import DownloadIcon from '../Icons/classic/DownloadIcon';
import HomeIcon from '../Icons/classic/HomeIcon';
import ArrowForwardIcon from '../Icons/classic/ArrowForwardIcon';
import PDFDocumentIcon from '../Icons/classic/PDFDocumentIcon';
import ArrowBackIcon from '../Icons/classic/ArrowBackIcon';
import CrosshairsIcon from '../Icons/circle/CrosshairsIcon';
import SaveIcon from '../Icons/classic/SaveIcon';
import PublishIcon from '../Icons/classic/PublishIcon';
import EmailIcon from '../Icons/classic/EmailIcon';
import FactCheckIcon from '../Icons/classic/FactCheckIcon';

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
  Next = 'next',
  PDF = 'pdf',
  Previous = 'previous',
  Save = 'save',
  Submit = 'submit',
  Validate = 'validate',
}

export interface ButtonProps {
  ariaDescription?: string;
  color?: ButtonColorTypes;
  component?: string;
  disabled?: boolean;
  icon?: JSX.Element | string;
  label: string;
  onClick?: Function;
  ref?: string;
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
  ref,
  size = ButtonSizeTypes.Medium,
  testId = 'buttton-' + label,
  toolTip = '',
  variant = ButtonVariantTypes.Outlined,
}: ButtonProps): JSX.Element {
  const clicked = (e: any) => (typeof onClick !== 'undefined' ? onClick(e) : null);

  const fetchIcon = () => {
    switch (icon) {
      case ButtonIcons.Add:
        return <AddIcon />;
      case ButtonIcons.Cancel:
        return <ClearIcon />;
      case ButtonIcons.Confirm:
        return <TickIcon />;
      case ButtonIcons.Delete:
        return <DeleteIcon />;
      case ButtonIcons.Download:
        return <DownloadIcon />;
      case ButtonIcons.Email:
        return <EmailIcon />;
      case ButtonIcons.Home:
        return <HomeIcon />;
      case ButtonIcons.Location:
        return <CrosshairsIcon />;
      case ButtonIcons.Next:
        return <ArrowForwardIcon />;
      case ButtonIcons.PDF:
        return <PDFDocumentIcon />;
      case ButtonIcons.Previous:
        return <ArrowBackIcon />;
      case ButtonIcons.Save:
        return <SaveIcon />;
      case ButtonIcons.Submit:
        return <PublishIcon />;
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
          ref={ref}
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
