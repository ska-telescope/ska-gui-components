DateEntry
~~~~~~~~~

*Overview*

Field for entering Dates into the application. Clicking on the icon opens up a date picker

.. figure:: /images/dateEntry.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { DateEntry } from '@ska-telescope/ska-gui-components';

   ...

   <DateEntry label="Label" testId="testId" value={ENTRY_FIELD_VALUE} />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "ariaDescription", "string", "No", "", "Used by Screen Readers"
    "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "disabled", " boolean", "No", "false", "Disables the component if true"
    "errorText", " string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", " string", "No", "''", "Displayed is there is a value"
    "label", " string", "Yes", "", "Label displayed for the Component"
    "labelPosition", "ENTRY_LABEL_POSITION", "No", "ENTRY_LABEL_POSITION.CONTAINED", "Allows for the positioning of the label"
    "labelWidth", "number", "No", "4", "Sets the width of the label for ENTRY_LABEL_POSITION.START & ENTRY_LABEL_POSITION.END labelPositions"
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "required", " boolean", "No", "false", "Asterisk is added to the label if true"
    "setValue", " function", "No", "null", "Used to update the value onChange"
    "testId", " string", "Yes", "", "Identifier for testing purposes"
    "value", " string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    :header: "Constant", "Values", "Usage"

   "ENTRY_LABEL_POSITION", "Contained, Top, Bottom, Start, End", "Allows for the positioning of the label"
   

.. admonition:: Testing Identifier

   Provided by the property *testId*