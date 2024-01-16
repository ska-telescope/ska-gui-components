import { OurButton, ButtonColorTypes, ButtonVariantTypes } from './Button';

export default {
  title: 'Example/Button',
  component: OurButton,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaDescription: 'aria Description',
    color: ButtonColorTypes.Success,
    label: 'OurButton Label',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Outlined,
  },
};
