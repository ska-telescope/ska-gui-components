import { ButtonVariantTypes } from '../../models/buttonVariantTypes';
import { ColorTypes } from '../../models';
import { SKAOButton } from './Button';

export default {
  title: 'Example/Button',
  component: SKAOButton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaDescription: 'aria Description',
    color: ColorTypes.Primary,
    label: 'SKAOButton Label',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Outlined,
    sx: {}
  },
};
