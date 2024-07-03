export declare enum ProgressIndicator {
  Circle = 'circle',
  Line = 'line',
  None = 'none',
}
export interface ProgressProps {
  ariaDescription?: string;
  ariaTitle?: string;
  determinate?: boolean;
  indicator?: ProgressIndicator;
  label?: boolean;
  size?: number;
  testId: string;
  value?: number;
}
export declare function Progress({
  ariaDescription,
  ariaTitle,
  determinate,
  indicator,
  label,
  size,
  testId,
  value,
}: ProgressProps): JSX.Element;
export default Progress;
