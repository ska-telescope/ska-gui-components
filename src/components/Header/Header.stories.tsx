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

export const Component = Template.bind({});

Component.args = {
  toolTip: { skao: 'SKAO WebSite', mode: ' Light / Dark Mode' },
  themeToggle: handleThemeToggle,
};
