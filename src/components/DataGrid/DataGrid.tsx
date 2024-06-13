import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
export interface DataGridProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnHeaderHeight?: number;
  columnVisibilityModel?: any;
  height?: number;
  initialState?: object;
  onCellClick?: any;
  onColumnVisibilityModelChange?: any;
  onRowClick?: any;
  onRowSelectionModelChange?: any;
  rows: any;
  rowSelectionModel: any;
  showBorder?: boolean;
  showMild?: boolean;
  testId: string;
}

export function StylingRowsGrid({
  ariaTitle = 'DataGrid',
  ariaDescription = 'Information provided in a tabular form',
  checkboxSelection = false,
  columns,
  columnHeaderHeight = 56,
  columnVisibilityModel,
  height = 400,
  initialState,
  onCellClick,
  onColumnVisibilityModelChange,
  onRowClick,
  onRowSelectionModelChange,
  rows,
  rowSelectionModel,
  testId,
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

  return (
    <Box sx={{ height, width: '100%' }}>
      <StyledDataGrid
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        checkboxSelection={checkboxSelection}
        columnHeaderHeight={columnHeaderHeight}
        columnVisibilityModel={columnVisibilityModel}
        data-testid={testId}
        getRowClassName={() => `super-app-theme`}
        initialState={initialState}
        onCellClick={onCellClick}
        onColumnVisibilityModelChange={onColumnVisibilityModelChange}
        onRowClick={handleRowClick}
        onRowSelectionModelChange={onRowSelectionModelChange}
        rowSelectionModel={rowSelectionModel}
        {...{ rows, columns }}
      />
    </Box>
  );
}

export default StylingRowsGrid;
