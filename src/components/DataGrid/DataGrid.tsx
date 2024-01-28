import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export interface DataGridProps {
  ariaTitle?: string;
  ariaDescription?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnVisibilityModel?: any;
  height?: number;
  initialState?: object;
  onColumnVisibilityModelChange?: any;
  onRowClick?: any;
  rows: any;
  selectedRows?: any;
  showBorder?: boolean;
  testId: string;
}

export function StylingRowsGrid({
  ariaTitle = 'DataGrid',
  ariaDescription = 'Information provided in a tabular form',
  checkboxSelection = false,
  columns,
  columnVisibilityModel,
  height = 400,
  initialState,
  onColumnVisibilityModelChange,
  onRowClick,
  rows,
  selectedRows,
  showBorder = true,
  testId,
}: DataGridProps) {
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  }));
  const StyledDataGridNoBorder = styled(DataGrid)(({ theme }) => ({
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
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  }));

  return (
    <Box sx={{ height, width: '100%' }}>
      {showBorder && (
        <StyledDataGrid
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          checkboxSelection={checkboxSelection}
          columnVisibilityModel={columnVisibilityModel}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          initialState={initialState}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onRowClick={onRowClick}
          selectedRows={selectedRows}
          {...{ rows, columns }}
        />
      )}
      {!showBorder && (
        <StyledDataGridNoBorder
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          checkboxSelection={checkboxSelection}
          columnVisibilityModel={columnVisibilityModel}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          initialState={initialState}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onRowClick={onRowClick}
          selectedRows={selectedRows}
          {...{ rows, columns }}
        />
      )}
    </Box>
  );
}

export default StylingRowsGrid;
