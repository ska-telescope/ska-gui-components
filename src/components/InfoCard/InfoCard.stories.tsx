import { Typography } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import React from 'react';
import InfoCard, { InfoCardColorTypes, InfoCardVariantTypes } from './InfoCard';

export default {
  title: 'Example/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered',
  },
};

const element = () => (
  <Box component="div">
    <Typography>THIS IS A CHILD</Typography>
  </Box>
);

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    children: element(),
    message: 'infoCard.message',
    variant: InfoCardVariantTypes.Outlined,
    color: InfoCardColorTypes.Info,
    fontSize: 35,
    maxHeight: '100vh',
    minHeight: '50px',
    testId: 'testId',
    showStatus: false,
    showStatusIcon: true,
  },
};
