import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '@mui/material';
import Header from './Header';

function handleThemeToggle() {}

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <Grid item>THIS</Grid>
    <Grid item>IS</Grid>
    <Grid item>THE</Grid>
    <Grid item>HEADER</Grid>
  </Header>
);

export const HeaderDisplay = Template.bind({});

HeaderDisplay.args = {
  themeToggle: handleThemeToggle,
};
