import { SKAOButton, ButtonColorTypes, ButtonVariantTypes } from './Button';

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
    color: ButtonColorTypes.Success,
    label: 'SKAOButton Label',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Outlined,
  },
};
