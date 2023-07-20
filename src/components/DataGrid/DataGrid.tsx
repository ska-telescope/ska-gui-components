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
  ariaLabel: string;
  columns: any;
  height: number;
  onRowClick?: any;
  rows: any;
}

export function StylingRowsGrid({ ariaLabel, columns, height, onRowClick, rows }: DataGridProps) {
  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Box sx={{ height, width: '100%' }}>
        <StyledDataGrid
          aria-label={ariaLabel}
          getRowClassName={() => `super-app-theme`}
          onRowClick={onRowClick}
          {...{ rows, columns }}
        />
      </Box>
    </Paper>
  );
}

StylingRowsGrid.defaultProps = {
  height: 400,
  onRowClick: null,
};

export default StylingRowsGrid;
