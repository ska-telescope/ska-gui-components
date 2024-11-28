Footer
~~~~~~

*Overview*

Standard Footer wrapper component that spaces evenly it's child components
Clicking on the copyright will display a link to a standard copyright page

The version can be provided via a property.   

There is also a tooltip which is displayed when hovering over the version
This is so that additional information like API version can be also provided if desired.

.. figure:: /images/footer.png
   :width: 90%


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

    "testId", "string", "No", "footer-testId", "Identifier for testing purposes"
    "version", "string", "No", "Version of the GUI Components", ""
    "versionTooltip", "string", "No", "Optional tooltip when hovering over the version", ""

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*