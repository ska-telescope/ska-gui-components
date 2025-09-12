import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SKAOBackdrop as Backdrop } from './Backdrop';
import { Typography } from '@mui/material';

export default {
  title: 'Example/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Backdrop>;

const Template: StoryFn<typeof Backdrop> = (args) => {
  return (
    <Backdrop {...args}>
      <Typography variant="h4" component="div">
        BACKDROP DUMMY
      </Typography>
    </Backdrop>
  );
};

export const BackdropDisplay = Template.bind({});

BackdropDisplay.args = {
  open: false,
  visible: true,
};
