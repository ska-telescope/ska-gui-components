TickBox
~~~~~~~~~

*Overview*

Field for entering text into the application

.. figure:: /images/tickBox.png
   :width: 90%

.. code-block:: sh

   import { TickBox } from '@ska-telescope/ska-gui-components';

   ...

   <TickBox label="TickBox testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "disabled", "boolean", "No", "false", "Disables the component if true"
    "label", "string", "Yes", "", "Label displayed for the Component"
    "labelEnd". "boolean", "No", "true", "Position of any label"
    "testId", "string", "Yes", "", "Identifier for testing purposes"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*