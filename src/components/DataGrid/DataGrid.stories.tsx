import React from 'react';
import StylingRowsGrid from './DataGrid';

const DUMMY_COLUMNS = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'execution_block', headerName: 'HEADER 1', width: 200 },
  { field: 'date_created', headerName: 'HEADER 2', width: 100 },
  { field: 'interface', headerName: 'HEADER 3', width: 100 },
  { field: 'dataproduct_file', headerName: 'HEADER 4', width: 100 },
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
  {
    id: 3,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 4,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 5,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 6,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 7,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 8,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 9,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
  {
    id: 10,
    interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
    execution_block: 'eb-m002-20221212-12345',
    date_created: '2022-12-12',
    dataproduct_file: 'product/eb-m002-20221212-12345',
    metadata_file: 'product/eb-m002-20221212-12345/ska-data-product.yaml',
  },
];

export default {
  title: 'Example/DataGrid',
  component: StylingRowsGrid,
  parameters: {
    layout: 'centered',
  },
};

export const Light = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    checkboxSelection: false,
    columns: DUMMY_COLUMNS,
    height: 400,
    onRowClick: null,
    rows: DUMMY_ROWS,
    showBorder: true,
    testId: 'testId',
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    checkboxSelection: false,
    columns: DUMMY_COLUMNS,
    height: 400,
    onRowClick: null,
    rows: DUMMY_ROWS,
    showBorder: true,
    testId: 'testId',
  },
};
