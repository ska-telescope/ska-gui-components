import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

function handleThemeToggle() {};

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderDisplay = Template.bind({});

HeaderDisplay.parameters = {
  backgrounds: { default: 'light' },
};

HeaderDisplay.args = {
    themeToggle: handleThemeToggle,
};
