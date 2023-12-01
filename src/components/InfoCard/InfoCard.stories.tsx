import InfoCard, { InfoCardColorTypes, InfoCardVariantTypes } from './InfoCard';

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
    variant: InfoCardVariantTypes.Outlined,
    color: InfoCardColorTypes.Info,
    fontSize: 35,
    testId: 'testId',
    showStatus: false,
    showStatusIcon: true,
  },
};
