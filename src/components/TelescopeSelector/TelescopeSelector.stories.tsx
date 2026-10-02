import { TELESCOPE_LOW } from '../../utils/telescopes';
import TelescopeSelector from './TelescopeSelector';

export default {
  title: 'Example/TelescopeSelector',
  component: TelescopeSelector,
  parameters: {
    layout: 'centered',
  },
};

const telescopeFunction = (e: any) => {
  null;
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    color: 'telescope',
    reversed: false,
    telescope: TELESCOPE_LOW,
    toolTip: 'Tool tip',
    updateTelescope: telescopeFunction,
  },
};
