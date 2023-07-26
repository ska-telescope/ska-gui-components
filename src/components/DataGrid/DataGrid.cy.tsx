import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';
import StylingRowsGrid from './DataGrid';

const THEME = [THEME_DARK, THEME_LIGHT];

const DUMMY_COLUMNS = [
  { field: 'execution_block', headerName: 'HEADER 1', width: 200 },
  { field: 'date_created', headerName: 'HEADER 2', width: 100 },
  { field: 'id', headerName: 'ID', width: 100 },
];

const DUMMY_ROWS = [
  {
    id: 1,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m001-20191031-12345',
    date_created: '2019-10-31',
    dataproduct_file: 'product/eb-m001-20221212-12345',
    metadata_file: 'product/eb-m001-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 2,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
];

describe('<SKAODataGrid />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <StylingRowsGrid columns={DUMMY_COLUMNS} rows={DUMMY_ROWS} />
        </ThemeProvider>
      );
    });
  }
});
