import * as React from 'react';
export interface DataGridProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnHeaderHeight?: number;
  columnVisibilityModel?: any;
  getRowHeight?: Function;
  height?: number | string;
  initialState?: object;
  onCellClick?: any;
  onColumnVisibilityModelChange?: any;
  onRowClick?: any;
  onRowSelectionModelChange?: any;
  rows: any;
  rowSelectionModel?: any;
  showBorder?: boolean;
  showMild?: boolean;
  testId: string;
}
export declare function StylingRowsGrid({
  ariaTitle,
  ariaDescription,
  checkboxSelection,
  columns,
  columnHeaderHeight,
  columnVisibilityModel,
  getRowHeight,
  height,
  initialState,
  onCellClick,
  onColumnVisibilityModelChange,
  onRowClick,
  onRowSelectionModelChange,
  rows,
  rowSelectionModel,
  testId,
}: DataGridProps): React.JSX.Element;
export default StylingRowsGrid;
