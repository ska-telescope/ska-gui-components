import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTree from './DataTree';

const mockData = {
  config: {
    cmdline: null,
    commit: null,
    image: 'artefact.skao.int/ska-sdp-script-vis-receive',
    processing_block: 'pb-test-20200425-00000',
    processing_script: 'vis-receive',
    version: '0.6.0',
  },
  context: {},
  execution_block: 'eb-test-20200325-00001',
  files: [
    {
      description: 'raw visibilities 1',
      path: 'vis1.ms',
      status: 'working',
    },
    {
      description: 'raw visibilities 2',
      path: 'vis2.ms',
      status: 'working',
    },
  ],
  interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
  date_created: '2020-03-25',
  dataproduct_file: 'product/eb-test-20200325-00001',
  metadata_file: 'product/eb-test-20200325-00001/ska-data-product.yaml',
};

export default {
  title: 'Example/DataTree',
  component: DataTree,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof DataTree>;

const Template: ComponentStory<typeof DataTree> = (args) => {
  return <DataTree {...args} />;
};

export const DataTreeDisplay = Template.bind({});

DataTreeDisplay.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  data: mockData,
  height: 500,
  maxWidth: 600,
  testId: 'testId',
};
