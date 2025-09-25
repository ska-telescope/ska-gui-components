import Footer from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    testId: 'testId',
    versionTooltip: 'Version tooltip',
    childrenMiddle: 'Footer middle',
    children: 'Footer right',
  },
};
