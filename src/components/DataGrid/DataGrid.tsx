import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Theme, styled } from '@mui/material/styles';

export enum StyleColorTypes {
  PrimaryDark = 'primaryDark',
  PrimaryLight = 'primaryLight',
  PrimaryMain = 'primaryMain',
  SecondaryDark = 'secondaryDark',
  SecondaryLight = 'secondaryLight',
  SecondaryMain = 'secondaryMain',
}
export interface DataGridProps {
  ariaTitle?: string;
  ariaDescription?: string;
  colorOnHover?: StyleColorTypes;
  colorSelected?: StyleColorTypes;
  colorSelectedHover?: StyleColorTypes;
  columns: any;
  columnVisibilityModel?: any;
  height?: number;
  initialState?: object;
  onColumnVisibilityModelChange?: any;
  onRowClick?: any;
  rows: any;
  testId: string;
}

export function StylingRowsGrid({
  ariaTitle = 'DataGrid',
  ariaDescription = 'Information provided in a tabular form',
  colorOnHover = StyleColorTypes.PrimaryDark,
  colorSelected = StyleColorTypes.SecondaryMain,
  colorSelectedHover = StyleColorTypes.SecondaryDark,
  columns,
  columnVisibilityModel,
  height = 400,
  initialState,
  onColumnVisibilityModelChange,
  onRowClick,
  rows,
  testId,
}: DataGridProps) {
  const setColor = (theme: Theme, color: StyleColorTypes) => {
    switch (color) {
      case StyleColorTypes.PrimaryDark:
        return theme.palette.primary.dark;
      case StyleColorTypes.PrimaryLight:
        return theme.palette.primary.light;
      case StyleColorTypes.PrimaryMain:
        return theme.palette.primary.main;
      case StyleColorTypes.SecondaryDark:
        return theme.palette.secondary.dark;
      case StyleColorTypes.SecondaryLight:
        return theme.palette.secondary.light;
      case StyleColorTypes.SecondaryMain:
        return theme.palette.secondary.main;
    }
  };

  const setForeground = (theme: Theme, color: StyleColorTypes) => {
    switch (color) {
      case StyleColorTypes.PrimaryDark:
        return theme.palette.secondary.light;
      case StyleColorTypes.PrimaryLight:
        return theme.palette.secondary.main;
      case StyleColorTypes.PrimaryMain:
        return theme.palette.secondary.main;
      case StyleColorTypes.SecondaryDark:
        return theme.palette.primary.light;
      case StyleColorTypes.SecondaryLight:
        return theme.palette.primary.light;
      case StyleColorTypes.SecondaryMain:
        return theme.palette.primary.main;
    }
  };

  const backgroundColor = () => {
    return 'secondary.contrastText';
  };

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .super-app-theme': {
      '&:hover': {
        backgroundColor: setColor(theme, colorOnHover),
      },
      '&.Mui-selected': {
        color: setForeground(theme, colorSelected),
        backgroundColor: setColor(theme, colorSelected),
        '&:hover': {
          backgroundColor: setColor(theme, colorSelectedHover),
        },
      },
    },
  }));

  return (
    <Paper sx={{ backgroundColor: backgroundColor() }}>
      <Box sx={{ height, width: '100%' }}>
        <StyledDataGrid
          aria-label={ariaTitle}
          aria-describedby={ariaDescription}
          columnVisibilityModel={columnVisibilityModel}
          data-testid={testId}
          getRowClassName={() => `super-app-theme`}
          initialState={initialState}
          onColumnVisibilityModelChange={onColumnVisibilityModelChange}
          onRowClick={onRowClick}
          {...{ rows, columns }}
        />
      </Box>
    </Paper>
  );
}

export default StylingRowsGrid;
