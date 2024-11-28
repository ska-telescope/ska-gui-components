import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridEventListener, GridFeatureMode } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
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

export function StylingRowsGrid({
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
  sx,
  testId = 'dataGrid-testId',
}: DataGridProps) {
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiTablePagination-displayedRows': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiTablePagination-select': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiTablePagination-selectIcon': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiTablePagination-selectLabel': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiDataGrid-row.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark,
      '&:hover': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
      },
    },
    '& .super-app-theme': {
      '&:hover': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light,
      },
      '&.Mui-selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  }));

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    onRowClick ? onRowClick(params) : null;
  };

  const getTheHeight = () => {
    return getRowHeight ? getRowHeight() : 52;
  };

  return (
    <Box sx={{ height, width: '100%' }}>
      <StyledDataGrid
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        checkboxSelection={checkboxSelection}
        columnHeaderHeight={columnHeaderHeight}
        columnVisibilityModel={columnVisibilityModel}
        data-testid={testId}
        filterMode={filterModeServer ? 'server' : 'client'}
        getRowClassName={() => `super-app-theme`}
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

export default StylingRowsGrid;
