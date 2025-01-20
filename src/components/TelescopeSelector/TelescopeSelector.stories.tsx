import { TELESCOPE_LOW } from '@ska-telescope/ska-javascript-components';
import TelescopeSelector from './TelescopeSelector';
import React from 'react';

export default {
  title: 'Example/TelescopeSelector',
  component: TelescopeSelector,
  parameters: {
    layout: 'centered',
  },
};

const telescopeFunction = (e: any) => {
  null;
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    reversed: false,
    telescope: TELESCOPE_LOW,
    toolTip: 'Tool tip',
    updateTelescope: telescopeFunction,
  },
};
