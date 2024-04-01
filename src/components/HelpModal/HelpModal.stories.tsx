import HelpModal from './HelpModal';

export default {
  title: 'Example/HelpModal',
  component: HelpModal,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    help: {
      content: 'HELP CONTENT',
      component: 'HELP COMPONENT',
      showHelp: true,
    },
    helpToggle: null,
  },
};
