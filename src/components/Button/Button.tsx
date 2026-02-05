import React, { JSX } from 'react';
import { Button, PopperPlacementType, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material';
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

import { Colors } from '@ska-telescope/ska-javascript-components';

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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: string;
  size?: ButtonSizeTypes;
  testId: string;
  toolTip?: string;
  toolTipPlacement?: string;
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
  testId = 'button-' + label,
  toolTip = '',
  toolTipPlacement = 'bottom',
  variant = ButtonVariantTypes.Outlined,
}: ButtonProps): JSX.Element {
  const theme = useTheme();

  const clicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const fetchColorFG = (theme: import('@mui/material').Theme) => {
    switch (color) {
      case ButtonColorTypes.Error:
        return variant === ButtonVariantTypes.Contained
          ? theme.palette.primary.contrastText
          : Colors().STATUS_FG_1;
      case ButtonColorTypes.Secondary:
        return variant === ButtonVariantTypes.Contained
          ? theme.palette.primary.contrastText
          : theme.palette.secondary.main;
      case ButtonColorTypes.Success:
        return variant === ButtonVariantTypes.Contained
          ? theme.palette.primary.contrastText
          : Colors().STATUS_FG_0;
      case ButtonColorTypes.Warning:
        return variant === ButtonVariantTypes.Contained
          ? theme.palette.primary.contrastText
          : Colors().STATUS_FG_3;
      default:
        return variant === ButtonVariantTypes.Contained ? 'Inherit' : Colors().STATUS_FG_5;
    }
  };

  const fetchIcon = (theme: import('@mui/material').Theme) => {
    switch (icon) {
      case ButtonIcons.Add:
        return <AddIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Cancel:
        return <ClearIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Confirm:
        return <TickIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Delete:
        return <DeleteIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Download:
        return <DownloadIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Email:
        return <EmailIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Home:
        return <HomeIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Location:
        return <CrosshairsIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Next:
        return <ArrowForwardIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.PDF:
        return <PDFDocumentIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Previous:
        return <ArrowBackIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Save:
        return <SaveIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Submit:
        return <PublishIcon colorFG={fetchColorFG(theme)} />;
      case ButtonIcons.Validate:
        return <FactCheckIcon colorFG={fetchColorFG(theme)} />;
      default:
        return null;
    }
  };

  const getIcon = () => {
    return typeof icon === 'string' ? fetchIcon(theme) : icon;
  };

  return (
    <Tooltip placement={toolTipPlacement as PopperPlacementType} title={toolTip} arrow>
      <span>
        <Button
          aria-label={label}
          aria-describedby={ariaDescription}
          aria-hidden={false}
          color={color}
          component={component as ElementType}
          data-testid={testId.length > 0 ? testId : 'button-' + label}
          disabled={disabled}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => clicked(e)}
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
