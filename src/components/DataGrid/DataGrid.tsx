import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .super-app-theme': {
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
}));

export interface DataGridProps {
  ariaTitle?: string;
  ariaDescription?: string;
  columns: any;
  height?: number;
  onRowClick?: any;
  rows: any;
  testId: string;
}

export function StylingRowsGrid({
  ariaTitle = 'DataGrid',
  ariaDescription = 'Information provided in a tabular form',
  columns,
  height = 400,
  onRowClick,
  rows,
  testId,
}: DataGridProps) {
  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Box sx={{ height, width: '100%' }}>
        <StyledDataGrid
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          onRowClick={onRowClick}
          {...{ rows, columns }}
        />
      </Box>
    </Paper>
  );
}

export default StylingRowsGrid;
