import React from 'react';
import DataTree from './DataTree';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { THEME_DARK, THEME_LIGHT, theme } from '../../services/theme/theme';

const THEME = [THEME_DARK, THEME_LIGHT];

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
};

describe('<DataTree />', () => {
  for (const theTheme of THEME) {
    it('Theme ' + theTheme, () => {
      cy.mount(
        <ThemeProvider theme={theme(theTheme)}>
          <CssBaseline />
          <DataTree data={mockData} testId="testId" />
        </ThemeProvider>
      );
    });
  }
});
