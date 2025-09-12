import { Alert, Box, Paper } from '@mui/material';
import StatusIcon from '../StatusIcon/StatusIcon';
import Children from '../../utils/types/types';

export enum AlertColorTypes {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  None = 'none',
}
export enum AlertVariantTypes {
  Filled = 'filled',
  Outlined = 'outlined',
  Default = 'default',
}

export interface AlertProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  color?: AlertColorTypes;
  children?: Children;
  variant?: AlertVariantTypes;
  showIcon?: boolean;
  testId: string;
}
export function SKAOAlert({
  action,
  ariaDescription = 'Panel that is colored dependant upon the provided status',
  ariaTitle = 'Alert',
  children,
  color = AlertColorTypes.Success,
  variant = AlertVariantTypes.Outlined,
  showIcon = false,
  testId = 'alert-testId',
}: AlertProps) {
  return (
    <Box m={1}>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.contrastText',
          height: '100%',
          minWidth: '60px',
        }}
      >
        {variant === AlertVariantTypes.Default && (
          <Alert
            action={action}
            aria-label={ariaTitle}
            aria-describedby={ariaDescription}
            aria-hidden={false}
            data-testid={testId}
            icon={false}
            key="alerts"
            severity={color as any}
          >
            {children}
          </Alert>
        )}
        {variant !== AlertVariantTypes.Default && showIcon && (
          <Alert
            action={action}
            aria-label={ariaTitle}
            aria-describedby={ariaDescription}
            aria-hidden={false}
            data-testid={testId}
            iconMapping={{
              error: <StatusIcon testId="statusId" icon level={1} size={20} />,
              info: <StatusIcon testId="statusId" icon level={4} size={20} />,
              success: <StatusIcon testId="statusId" icon level={0} size={20} />,
              warning: <StatusIcon testId="statusId" icon level={2} size={20} />,
            }}
            key="alerts"
            severity={color as any}
            variant={variant as any}
          >
            {children}
          </Alert>
        )}
        {variant !== AlertVariantTypes.Default && !showIcon && (
          <Alert
            action={action}
            aria-label={ariaTitle}
            aria-describedby={ariaDescription}
            aria-hidden={false}
            data-testid={testId}
            icon={false}
            key="alerts"
            severity={color as any}
            variant={variant as any}
          >
            {children}
          </Alert>
        )}
      </Paper>
    </Box>
  );
}

export default SKAOAlert;
