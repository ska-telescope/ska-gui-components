**DateEntry**
~~~~~~~~~

*Overview*

Field for entering Dates into the application. Clicking on the icon opens up a date picker

.. code-block:: sh
   :caption: Example : Default usage

   import { DateEntry } from '@ska-telescope/ska-gui-components';

   ...

   <DateEntry label="Label" testId="testId" value={ENTRY_FIELD_VALUE} />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "disabled", " boolean", "No", "false", "Disables the component if true"
    "errorText", " string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", " string", "No", "''", "Displayed is there is a value"
    "label", " string", "Yes", "", "Label displayed for the Component"
    "required", " boolean", "No", "false", "Asterisk is added to the label if true"
    "setValue", " function", "No", "null", "Used to update the value onChange"
    "testId", " string", "Yes", "", "Identifier for testing purposes"
    "value", " string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*