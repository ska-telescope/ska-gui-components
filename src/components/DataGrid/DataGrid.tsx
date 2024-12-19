import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
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

export function SKAODataGrid({
  ariaTitle = 'DataGrid',
  ariaDescription = 'Information provided in a tabular form',
  checkboxSelection = false,
  columns,
  columnHeaderHeight = 56,
  columnVisibilityModel,
  filterModeServer = false,
  getRowHeight,
  height = 400,
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
  sx = {
    '& .MuiDataGrid-row.Mui-selected': {
      backgroundColor: 'primary.dark',
      color: 'primary.contrastText',
      '&:hover': {
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
      },
    },
  },
  testId = 'dataGrid-testId',
}: DataGridProps) {
  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    if (onRowClick) {
      onRowClick(params);
    }
  };

  const getTheHeight = () => {
    return getRowHeight ? getRowHeight() : 52;
  };

  return (
    <Box sx={{ height, width: '100%' }}>
      <DataGrid
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        checkboxSelection={checkboxSelection}
        columnHeaderHeight={columnHeaderHeight}
        columnVisibilityModel={columnVisibilityModel}
        data-testid={testId}
        filterMode={filterModeServer ? 'server' : 'client'}
        getRowHeight={getTheHeight}
        initialState={initialState}
        loading={loading}
        onCellClick={onCellClick}
        onColumnVisibilityModelChange={onColumnVisibilityModelChange}
        onFilterModelChange={onFilterModelChange}
        onRowClick={handleRowClick}
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowHeight={rowHeight}
        rowSelectionModel={rowSelectionModel}
        style={style}
        sx={sx}
        {...{ rows, columns }}
      />
    </Box>
  );
}

export default SKAODataGrid;
