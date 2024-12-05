import * as React from 'react';
export interface DataGridProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnHeaderHeight?: number;
  columnVisibilityModel?: any;
  filterModeServer?: boolean;
  getRowHeight?: Function;
  height?: number | string;
  initialState?: object;
  loading?: any;
  onCellClick?: any;
  onColumnVisibilityModelChange?: any;
  onFilterModelChange?: any;
  onRowClick?: any;
  onRowSelectionModelChange?: any;
  rows: any;
  rowHeight?: number;
  rowSelectionModel?: any;
  sx?: any;
  showBorder?: boolean;
  showMild?: boolean;
  style?: any;
  testId: string;
}
export declare function SKAODataGrid({
  ariaTitle,
  ariaDescription,
  checkboxSelection,
  columns,
  columnHeaderHeight,
  columnVisibilityModel,
  filterModeServer,
  getRowHeight,
  height,
  initialState,
  loading,
  onCellClick,
  onColumnVisibilityModelChange,
  onFilterModelChange,
  onRowClick,
  onRowSelectionModelChange,
  rows,
  rowHeight,
  rowSelectionModel,
  style,
  sx,
  testId,
}: DataGridProps): React.JSX.Element;
export default SKAODataGrid;
