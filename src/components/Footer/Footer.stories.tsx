import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '@mui/material';
import Footer from './Footer';
import { JAVASCRIPT_COMPONENTS_VERSION } from '@ska-telescope/ska-javascript-components';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <Grid item>THIS</Grid>
    <Grid item>IS</Grid>
    <Grid item>{JAVASCRIPT_COMPONENTS_VERSION}</Grid>
    <Grid item>THE</Grid>
    <Grid item>FOOTER</Grid>
  </Footer>
);

export const Component = Template.bind({});

Component.args = {
  ariaTitle: 'aria Title',
  ariaDescription: 'aria Description',
  testId: 'testId',
};
