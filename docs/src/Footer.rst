Footer
~~~~~~

*Overview*

Standard Footer wrapper component that spaces evenly it's child components

.. code-block:: sh
   :caption: Example : Default usage

   import { Footer } from '@ska-telescope/ska-gui-components';

   ...

   <Footer testId="testId" version="1.2.3">
      <Grid />
      <Grid item>More content</Grid>
   </Footer>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "version", "string", "No", "Version of the GUI Components", ""

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*