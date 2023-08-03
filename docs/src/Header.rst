**Header**
~~~~~~~~~

*Overview*

Standard Header wrapper component that spaces evenly it's child components

.. code-block:: sh
   :caption: Example : Default usage

   import { Header } from '@ska-telescope/ska-gui-components';

   ...

   <Header testId="testId" themeToggle={themeToggle}>
      <Grid item>THIS</Grid>
      <Grid item>IS</Grid>
      <Grid item>THE</Grid>
      <Grid item>FOOTER</Grid>
   </Header>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "themeToggle", " Function", "    No", " null", " If provided, the theme toggling button is displayed"
    "toolTip", " Object", "    No", " all values ''", " Contains toolTip text for display (See below)"


.. csv-table:: *ToolTip values*  ( Translated values should be passed in as an override )
    :header: "Property", "Type", "Required", "default", ""
    
    "skao", "string", "No", "'SKAO WebSite'", "ToolTip for the SKAO Logo"
    "mode", "string", "No", "'Light / Dark Mode'", "ToolRip for the Theme mode"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*