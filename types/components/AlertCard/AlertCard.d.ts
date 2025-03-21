import { AlertColorTypes, AlertVariantTypes } from '../Alert/Alert';
export interface AlertCardProps {
  action?: any;
  ariaDescription?: string;
  ariaTitle?: string;
  array: {
    color: AlertColorTypes;
    hideValue: boolean;
    title: string;
    value: number;
    variant: AlertVariantTypes;
  }[];
  clickFunction?: Function;
  variant?: AlertVariantTypes;
  showStatus?: boolean;
  showStatusIcon?: boolean;
  testId: string;
  title?: string;
}
export declare function AlertCard({
  action,
  ariaDescription,
  ariaTitle,
  array,
  clickFunction,
  showStatus,
  showStatusIcon,
  testId,
  title,
  variant,
}: AlertCardProps): import('react/jsx-runtime').JSX.Element;
export default AlertCard;
