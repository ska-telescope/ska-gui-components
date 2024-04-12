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
  obscore: {
    access_estsize: 1,
    dataproduct_type: 'MS',
    calib_level: 'raw',
    obs_collection: 'AIV-tests-20230401',
    obs_id: 'pb-test-20230401-12345',
    access_url: 'https://archive.skatelescope.org/pb-test-20230401-12345/retrieve',
    access_format: 'application/x-tar-gzip',
    target_name: 'None',
    s_ra: 10.20304,
    s_dec: -26.70312,
    t_min: 19304.508625,
    t_max: 19340.509625,
    t_exptime: 86.4,
    o_ucd: 'stat.fourier',
    pol_states: '/XX/XY/YX/YY/',
    pol_xel: 4,
    facility_name: 'SKA-Observatory',
    instrument_name: 'SKA-LOW',
  },
  date_created: '2023-04-01',
  dataproduct_file: 'eb-test-20230401-12345',
  metadata_file: 'eb-test-20230401-12345/ska-data-product.yaml',
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
