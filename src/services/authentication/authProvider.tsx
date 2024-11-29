import React from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { LogLevel } from '@azure/msal-browser';

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */

const AuthProvider = ({
  MSENTRA_CLIENT_ID,
  MSENTRA_TENANT_ID,
  MSENTRA_REDIRECT_URI,
  children,
}): React.JSX.Element => {
  const msalConfig = {
    auth: {
      clientId: `${MSENTRA_CLIENT_ID}`,
      authority: `https://login.microsoftonline.com/${MSENTRA_TENANT_ID}`,
      redirectUri: `${MSENTRA_REDIRECT_URI}`,
    },
    cache: {
      cacheLocation: 'sessionStorage', // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              break;
            default:
          }
        },
      },
    },
  };

  const msalInstance = new PublicClientApplication(msalConfig);

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default AuthProvider;
