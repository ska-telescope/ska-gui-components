import React from 'react';
import OurIconButton from './IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';

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
    icon: <MyLocationIcon />,
    testId: 'testId',
    toolTip: 'Tooltip',
  },
};
