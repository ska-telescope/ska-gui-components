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
   "selectTelescope", "boolean", "No", "true", "Allows the selection of telescope to be suppressed"
   "testId", "string", "Yes", "", "Identifier for testing purposes"
   "title", "string", "No", "", "Title of the application, which is forced to upper case"
   "toolTip", " Object", "    No", " all values ''", " Contains toolTip text for display (See below)"


.. csv-table:: *ToolTip values*  ( Translated values should be passed in as an override )
    :header: "Property", "Type", "Required", "default", ""
    
    "skao", "string", "No", "'SKAO WebSite'", "ToolTip for the SKAO Logo"
    "mode", "string", "No", "'Light / Dark Mode'", "ToolRip for the Theme mode"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*