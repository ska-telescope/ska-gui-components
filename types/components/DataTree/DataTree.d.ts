export interface DataTreeProps {
  data: any;
  testId: string;
  ariaTitle?: string;
  ariaDescription?: string;
  height?: number;
  maxWidth?: number;
}
export declare function DataTree({
  ariaTitle,
  ariaDescription,
  data,
  height,
  maxWidth,
  testId,
}: DataTreeProps): JSX.Element;
export default DataTree;
