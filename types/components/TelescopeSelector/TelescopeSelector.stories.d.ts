import TelescopeSelector from './TelescopeSelector';
declare const _default: {
  title: string;
  component: typeof TelescopeSelector;
  parameters: {
    layout: string;
  };
};
export default _default;
export declare const Default: {
  args: {
    ariaTitle: string;
    ariaDescription: string;
    telescope: {
      code: string;
      name: string;
      location: string;
      position: {
        lat: number;
        lon: number;
      };
      image: string;
    };
    toolTip: string;
    updateTelescope: (e: any) => void;
  };
};
