import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import SKAOButton, { ButtonColorTypes, ButtonVariantTypes } from './Button';

export default {
  title: 'Example/SKAOButton',
  component: SKAOButton,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SKAOButton>;

const Template: ComponentStory<typeof SKAOButton> = (args) => {
  return <SKAOButton {...args} />;
};

export const SKAOButtonDisplay = Template.bind({});

SKAOButtonDisplay.args = {
  ariaDescription: 'aria Description',
  color: ButtonColorTypes.Success,
  label: 'SKAOButton Label',
  icon: <DoneOutlinedIcon />,
  toolTip: 'Tool tip',
  variant: ButtonVariantTypes.Outlined,
};
