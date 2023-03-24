import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const FooterDisplay = Template.bind({});

FooterDisplay.args = {};
