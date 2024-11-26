import * as React from 'react';
import { GridFeatureMode } from '@mui/x-data-grid';
export interface DataGridProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnHeaderHeight?: number;
  columnVisibilityModel?: any;
  filterMode?: GridFeatureMode;
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
  showBorder?: boolean;
  showMild?: boolean;
  style?: any;
  testId: string;
}
export declare function StylingRowsGrid({
  ariaTitle,
  ariaDescription,
  checkboxSelection,
  columns,
  columnHeaderHeight,
  columnVisibilityModel,
  filterMode,
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
  testId,
}: DataGridProps): React.JSX.Element;
export default StylingRowsGrid;
