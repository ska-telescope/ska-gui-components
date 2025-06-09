import { AppWrapper } from '../AppWrapper/AppWrapper';

export default {
  title: 'Example/AppWrapper',
  component: AppWrapper,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    mainChildren: 'MAIN CHILD',
    footerChildren: 'FOOTER CHILD',
    application: 'Application',
    headerChildren: 'HEADER CHILD',
    loginComponent: 'LOGIN COMPONENT',
    docsIconToolTip: 'DOCS ICON TOOLTIP',
    docsURL: 'DOCS URL',
    skaoLogoToolTip: 'SKAO LOGO TOOLTIP',
    themeModeToolTip: 'THEME MODE TOOLTIP',
    selectTelescope: true,
    storageThemeMode: 'dark',
    storageToggleTheme: null,
    version: '1.2.3',
    versionTooltip: '6.6.6',
  },
};
