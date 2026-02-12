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
    // color: ButtonColorTypes.Primary,
    icon: ButtonIcons.Add,
    label: 'OurButton Label',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Contained,
  },
};

export const Dark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    ariaDescription: 'aria Description',
    // color: ButtonColorTypes.Error,
    icon: ButtonIcons.Add,
    label: 'OurButton Label',
    testId: 'testId',
    toolTip: 'Tool tip',
    variant: ButtonVariantTypes.Contained,
  },
};
