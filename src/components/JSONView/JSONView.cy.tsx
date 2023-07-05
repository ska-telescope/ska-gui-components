import React from 'react';
import { mount } from 'cypress/react18';
import JSONView from './JSONView';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const mockData = {
  interface: 'http://schema.skao.int/ska-data-product-meta/0.1',
  execution_block: 'eb-m001-20191031-12345',
  context: {
    observer: 'AIV_person_1',
    intent: 'Experimental run as part of XYZ-123',
    notes: 'Running that signal from XX/YY/ZZ through again, things seem a bit flaky',
  },
  config: {
    processing_block: 'pb-m001-20191031-12345',
    processing_script: 'receive',
    image: 'artefact.skao.int/ska-docker/vis_receive',
    version: '0.1.3',
    commit: '516fb5a693f9dc9aff5d46192f4e055b582fc025',
    cmdline: '-dump /product/eb-m001-20191031-12345/ska-sdp/pb-m001-20191031-12345/vis.ms',
  },
  files: [
    {
      path: 'vis.ms',
      status: 'working',
      description: 'Raw visibility dump from receive',
    },
  ],
};

describe('<JSONView />', () => {
  it('renders: light', () => {
    mount(
      <ThemeProvider theme={theme(THEME_LIGHT)}>
        <CssBaseline />
        <JSONView data={mockData} />
      </ThemeProvider>
    );
  });

  it('renders: dark', () => {
    mount(
      <ThemeProvider theme={theme(THEME_DARK)}>
        <CssBaseline />
        <JSONView data={mockData} />
      </ThemeProvider>
    );
  });
});
