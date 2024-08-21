import { OurButton, ButtonColorTypes, ButtonVariantTypes, ButtonIcons } from './Button';

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
    icon: ButtonIcons.Add,
    label: 'OurButton Label',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Outlined,
  },
};
