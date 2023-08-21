Footer
~~~~~~

*Overview*

Standard Footer wrapper component that spaces evenly it's child components

.. code-block:: sh
   :caption: Example : Default usage

   import { Footer } from '@ska-telescope/ska-gui-components';

   ...

   <Footer testId="testId">
      <Grid item>THIS</Grid>
      <Grid item>IS</Grid>
      <Grid item>THE</Grid>
      <Grid item>FOOTER</Grid>
   </Footer>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "testId", "string", "Yes", "", "Identifier for testing purposes"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*