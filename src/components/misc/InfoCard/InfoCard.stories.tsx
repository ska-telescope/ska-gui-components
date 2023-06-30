import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InfoCard from './InfoCard';

export default {
  title: 'Example/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => <InfoCard {...args} />;

export const Component = Template.bind({});

Component.parameters = {
  backgrounds: { default: 'light' },
};

Component.args = {
  message: 'infoCard.message',
  filled: false,
  level: 1,
  fontSize: 35,
};
