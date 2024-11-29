import { ButtonLogin } from './ButtonLogin';

export default {
  title: 'Example/ButtonLogin',
  component: ButtonLogin,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaDescription: 'aria Description',
    label: 'ButtonLogin Label',
    toolTip: 'Tool tip',
  },
};
