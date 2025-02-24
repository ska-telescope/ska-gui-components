AuthWrapper
~~~~~~~~~~~

*Overview*

Wrapper that provides the standard header and footer.
This can be configured via a number of properties, which are listed later on this page.

.. tip:: 

   The component has been provided all the defaults needed to work within a standard SKA application.


.. figure:: /_static/img/components/appwrapper.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { AppProvider } from '@ska-telescope/ska-gui-components';

   ...

   <AuthWrapper
      iconDocsURL="... some URL ..."
      storageThemeMode={themeMode.mode}
      storageToggleTheme={toggleTheme}
   />


.. csv-table:: Properties
   :header: "Property", "Type", "Required", "Notes"

   "application", "string", "No", "Title displayed to the right of the SKA logo"
   "footerChildren", "JSX.Element[]", "No", "One or more elements to be added to the Wrapper and displayed as part of the footer"
   "headerChildren", "JSX.Element[]", "No", "One or more elements to be added to the Wrapper and displayed as part of the header"
   "iconDocsToolTip", "string", "No", "Tooltip for the documentation icon"
   "iconDocsURL", "string", "Yes", "URL for the documentation icon"
   "iconSKAOToolTip", "string", "No", "Tooltip for the SKAO logo"
   "iconThemeToolTip", "string", "No", "Tooltip for the theme icon"
   "mainChildren", "JSX.Element[]", "No", "One or more elements to be added to the Wrapper and placed in the main part of the page"
   "storageHelp", "Help", "No", "If present, is available if the help icon is clicked"
   "storageHelpToggle", "function", "No", "function that is executed if the help icon is clicked"
   "storageTelescope", "Telescope", "No", "Contains the active telescope, and if normally provided via storage"
   "storageThemeMode", "string", "Yes", "Current mode of the theme, usually provided by a storage variable"
   "storageToggleTheme", "function", "Yes", "Function that toggles the theme between available options"
   "storageUpdateTelescope?", "function", "No", "function that is executed if the telescope toggle is clicked"
   "version", "string", "No", "Version displayed in the footer"
   "versionTooltip", "string", "No", "Tooltip for the version displayed in the footer"
