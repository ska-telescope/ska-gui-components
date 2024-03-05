TextEntry
~~~~~~~~~

*Overview*

Field for entering text into the application

.. figure:: /images/textEntry.png
   :width: 90%

.. code-block:: sh

   import { TextEntry } from '@ska-telescope/ska-gui-components';

   ...

   <TextEntry label="TextEntry Label" testId="testId" value={ENTRY_FIELD_VALUE} />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "ariaDescription", "string", "No", "", "Used by Screen Readers"
    "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "disabled", "boolean", "No", "false", "Disables the component if true"
    "errorText", "string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", "string", "No", "''", "Displayed is there is a value"
    "label", "string", "Yes", "", "Label displayed for the Component"
    "labelPosition", "POSITION", "No, "POSITION.CONTAINED", "Allows for the positioning of the label"
    "labelWidth", "number", "No", "4", "Sets the width of the label for POSITION.START & POSITION.END labelPositions"
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "password", "boolean", "No", "false", "Value entered is obscured"
    "required", "boolean", "No", "false", "Asterisk is added to the label if true"
    "rows", "number", "No", "1", "TEXT ONLY.  text area when value is above 1"
    "setValue", "function", "No", "null", "Used to update the value onChange"
    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

   :header: "Constant", "Values", "Usage"

   "POSITION", "Contained,Top,Bottom, Start, End", "Allows for the positioning of the label"

.. admonition:: Testing Identifier

   Provided by the property *testId*