Header
~~~~~~

*Overview*

Standard Header wrapper component that spaces evenly it's child components
This includes the telescopeSelector component which can be suppressed if not required.

.. figure:: /images/header.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { Header } from '@ska-telescope/ska-gui-components';

   ...

   <Header testId="testId" title="SOME TITLE">
      <Grid item>THIS</Grid>
      <Grid item>IS</Grid>
      <Grid item>THE</Grid>
      <Grid item>FOOTER</Grid>
   </Header>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "docs", "{ tooltip: string; url: string; }", "No", "", "Displays docs icon if a url is provided"
   "selectTelescope", "boolean", "No", "true", "Allows the selection of telescope to be suppressed"
   "showHelp", "boolean", "No", "false", "Allows the help to be displayed if there is content to be displayed"
   "testId", "string", "No", "header-testId", "Identifier for testing purposes"
   "title", "string", "No", "", "Title of the application, which is forced to upper case"
   "toolTip", " Object", "    No", " all values ''", " Contains toolTip text for display (See below)"
   "useSymbol", "boolean", "No", "false", "Allows for the SKAO Symbol to be used instead of the Logo"


.. csv-table:: *ToolTip values*  ( Translated values should be passed in as an override )
    :header: "Property", "Type", "Required", "default", ""
    
    "skao", "string", "No", "'SKAO WebSite'", "ToolTip for the SKAO Logo"
    "mode", "string", "No", "'Light / Dark Mode'", "ToolRip for the Theme mode"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*