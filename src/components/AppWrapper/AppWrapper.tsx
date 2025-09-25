import React, { JSX } from 'react';
import { Paper } from '@mui/material';
import { Spacer, SPACER_VERTICAL } from '@ska-telescope/ska-javascript-components';
import CopyrightModal from '../CopyrightModal/CopyrightModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const SPACER_HEADER = 70;
export const SPACER_FOOTER = 0;

export type Children = JSX.Element | JSX.Element[] | null;

export type Help = {
  content: Object;
  component: Object;
  showHelp: Boolean;
};

export type Telescope = {
  code: string;
  name: string;
  location: string;
  position: {
    lat: number;
    lon: number;
  };
  image: string;
};

export type Storage = {
  help?: Help;
  helpToggle?: Function;
  telescope?: Telescope;
  themeMode: string;
  toggleTheme: Function;
  updateTelescope?: Function;
};

export type AppWrapperProperties = {
  application?: string;
  footerChildren?: Children;
  footerChildrenMiddle?: Children;
  headerChildren?: Children;
  iconDocsToolTip?: string;
  iconDocsURL: string;
  iconFeedbackToolTip?: string;
  iconFeedbackURL: string;
  iconSKAOToolTip?: string;
  iconThemeToolTip?: string;
  loginComponent?: JSX.Element | null;
  mainChildren?: Children;
  selectTelescope?: boolean;
  storageHelp?: Help;
  storageHelpToggle?: Function;
  storageTelescope?: Telescope;
  storageThemeMode: string;
  storageToggleTheme: Function;
  storageUpdateTelescope?: Function;
  version?: string;
  versionTooltip?: string;
};

function TheHeader(properties: AppWrapperProperties): React.JSX.Element {
  return (
    <Header
      docs={{
        tooltip: properties.iconDocsToolTip
          ? properties.iconDocsToolTip
          : 'Click here for SKAO documentation',
        url: properties.iconDocsURL,
      }}
      feedback={{
        tooltip: properties.iconFeedbackToolTip
          ? properties.iconFeedbackToolTip
          : 'Click here to provide SKAO with feedback',
        url: properties.iconFeedbackURL,
      }}
      loginComponent={properties.loginComponent}
      selectTelescope={properties.selectTelescope}
      title={properties.application ? properties.application : 'SKA APPLICATION'}
      testId="skaHeader"
      toolTip={{
        skao: properties.iconSKAOToolTip ? properties.iconSKAOToolTip : 'SKAO WebSite',
        mode: properties.iconThemeToolTip ? properties.iconThemeToolTip : 'Colour Mode Toggle',
      }}
      storage={{
        help: properties.storageHelp,
        helpToggle: properties.storageHelpToggle,
        telescope: properties.storageTelescope,
        themeMode: properties.storageThemeMode,
        toggleTheme: properties.storageToggleTheme,
        updateTelescope: properties.storageUpdateTelescope,
      }}
      useBrowserStorage={false}
    >
      {properties.headerChildren}
    </Header>
  );
}

export function TheFooter(properties: AppWrapperProperties): React.JSX.Element {
  const [showCopyright, setShowCopyright] = React.useState(false);

  return (
    <>
      <CopyrightModal copyrightFunc={setShowCopyright} show={showCopyright} />
      <Footer
        copyrightFunc={setShowCopyright}
        testId="footerId"
        version={properties.version}
        versionTooltip={properties.versionTooltip}
        children={properties.footerChildren}
        childrenMiddle={properties.footerChildrenMiddle}
      />
    </>
  );
}

export function AppWrapper(properties: AppWrapperProperties) {
  return (
    <Paper elevation={0} sx={{ height: '100%', backgroundColor: 'secondary.contrastText' }}>
      {TheHeader(properties)}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'secondary.contrastText',
          width: '100vw',
          minHeight: '100vh',
        }}
      >
        <div>
          <Spacer size={SPACER_HEADER} axis={SPACER_VERTICAL} />
          <main>{properties.mainChildren}</main>
          <Spacer size={SPACER_FOOTER} axis={SPACER_VERTICAL} />
        </div>
      </Paper>
      {TheFooter(properties)}
    </Paper>
  );
}

export default AppWrapper;
