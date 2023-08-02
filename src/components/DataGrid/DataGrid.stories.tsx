import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StylingRowsGrid from './DataGrid';

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

export default {
  title: 'Example/DataGrid',
  component: StylingRowsGrid,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof StylingRowsGrid>;

const Template: ComponentStory<typeof StylingRowsGrid> = (args) => <StylingRowsGrid {...args} />;

export const Component = Template.bind({});

Component.parameters = {
  backgrounds: { default: 'light' },
};

Component.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  columns: DUMMY_COLUMNS,
  height: 400,
  onRowClick: null,
  rows: DUMMY_ROWS,
  testId: 'testId',
};
