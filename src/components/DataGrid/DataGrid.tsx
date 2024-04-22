import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export interface DataGridProps {
  ariaDescription?: string;
  ariaTitle?: string;
  checkboxSelection?: boolean;
  columns: any;
  columnVisibilityModel?: any;
  height?: number;
  initialState?: object;
  onColumnVisibilityModelChange?: any;
  onRowClick?: any;
  rows: any;
  onCellClick?: any;
  showBorder?: boolean;
  showMild?: boolean;
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
  onCellClick,
  showBorder = true,
  showMild = false,
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
    '& .MuiDataGrid-columnHeaderTitle': {
      overflow: 'visible',
      lineHeight: '1.43rem',
      whiteSpace: 'normal',
    },
  }));
  const StyledDataGridMild = styled(DataGrid)(({ theme }) => ({
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
    '& .MuiDataGrid-columnHeaderTitle': {
      overflow: 'visible',
      lineHeight: '1.43rem',
      whiteSpace: 'normal',
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
    '& .MuiDataGrid-columnHeaderTitle': {
      overflow: 'visible',
      lineHeight: '1.43rem',
      whiteSpace: 'normal',
    },
  }));
  const StyledDataGridNoBorderMild = styled(DataGrid)(({ theme }) => ({
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
    '& .MuiDataGrid-columnHeaderTitle': {
      overflow: 'visible',
      lineHeight: '1.43rem',
      whiteSpace: 'normal',
    },
  }));

  return (
    <Box sx={{ height, width: '100%' }}>
      {showBorder && !showMild && (
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
          onCellClick={onCellClick}
          {...{ rows, columns }}
        />
      )}
      {showBorder && showMild && (
        <StyledDataGridMild
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          checkboxSelection={checkboxSelection}
          columnVisibilityModel={columnVisibilityModel}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          initialState={initialState}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onRowClick={onRowClick}
          onCellClick={onCellClick}
          {...{ rows, columns }}
        />
      )}
      {!showBorder && !showMild && (
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
          onCellClick={onCellClick}
          {...{ rows, columns }}
        />
      )}
      {!showBorder && showMild && (
        <StyledDataGridNoBorderMild
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          checkboxSelection={checkboxSelection}
          columnVisibilityModel={columnVisibilityModel}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          initialState={initialState}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onRowClick={onRowClick}
          onCellClick={onCellClick}
          {...{ rows, columns }}
        />
      )}
    </Box>
  );
}

export default StylingRowsGrid;
