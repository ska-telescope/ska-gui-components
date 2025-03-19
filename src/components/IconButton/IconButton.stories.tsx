import React from 'react';
import OurIconButton from './IconButton';
import CrossharsIcon from '../Icons/circle/CrosshairsIcon';

export default {
  title: 'Example/IconButton',
  component: OurIconButton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    icon: <CrossharsIcon colorFG={'#000000'} visual />,
    testId: 'testId',
    toolTip: 'Tooltip',
  },
};
