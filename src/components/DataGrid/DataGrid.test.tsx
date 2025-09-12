import React from 'react';
import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import DataGrid from '././DataGrid';
import '@testing-library/jest-dom';

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

describe('DataGrid', () => {
  // const mockAction = vi.fn();
  test('renders correctly', () => {
    render(
      <DataGrid
        ariaTitle="aria Title"
        ariaDescription="aria Description"
        checkboxSelection={false}
        columns={DUMMY_COLUMNS}
        height={400}
        onRowClick={null}
        rows={DUMMY_ROWS}
        // showBorder={true}
        showMild={false}
        testId="testId"
      />,
    );
  });
});
