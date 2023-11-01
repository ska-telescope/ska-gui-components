import InfoCard from './InfoCard';

export default {
  title: 'Example/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    ariaTitle: 'aria Title',
    ariaDescription: 'aria Description',
    message: 'infoCard.message',
    filled: false,
    level: 1,
    fontSize: 35,
    testId: 'testId',
  },
};
