import { SKAOAlert, AlertVariantTypes, AlertColorTypes } from './Alert';
declare const _default: {
  title: string;
  component: typeof SKAOAlert;
  parameters: {
    layout: string;
  };
};
export default _default;
export declare const Default: {
  parameters: {
    backgrounds: {
      default: string;
    };
  };
  args: {
    ariaDescription: string;
    ariaTitle: string;
    children: string;
    color: AlertColorTypes;
    variant: AlertVariantTypes;
    testId: string;
  };
};
export declare const Dark: {
  parameters: {
    backgrounds: {
      default: string;
    };
  };
  args: {
    ariaDescription: string;
    ariaTitle: string;
    children: string;
    color: AlertColorTypes;
    variant: AlertVariantTypes;
    testId: string;
  };
};
