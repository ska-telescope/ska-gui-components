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

function StylingRowsGrid({ ariaLabel, columns, height, onRowClick, rows }) {
  return (
    <Paper sx={{ backgroundColor: 'secondary.contrastText' }}>
      <Box sx={{ height, width: '100%' }}>
        <StyledDataGrid
          aria-label={ariaLabel}
          onRowClick={onRowClick}
          {...{ rows, columns }}
          getRowClassName={() => `super-app-theme`}
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
