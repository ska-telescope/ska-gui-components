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
    "errorText", "string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", "string", "No", "''", "Displayed is there is a value"
    "height", "number", "No", "45", "Allows for the height of the component to be adjusted"
    "inputRef", "React.MutableRefObject<any>", "No", "", "Allows the field entry to be accessed by reference if needed"
    "label", "string", "Yes", "", "Label displayed for the Component"
    "labelBold", "boolean", "No", "false", "Label is displayed in bold unless disabled"
    "labelPosition", "LABEL_POSITION", "No", "CONTAINED", "Allows for the positioning of the label"
    "labelWidth", "number", "No", "4", "Sets the width of the label for LABEL_POSITION.START & LABEL_POSITION.END labelPositions"
    "name", "string", "No", "", "Allows for the field to be referenced and is separate to the testId"
    "onBlue", "Function", "No", "", "Function executed when the component loses focus"   
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "required", " boolean", "No", "false", "Asterisk is added to the label if true"
    "setValue", " function", "No", "null", "Used to update the value onChange"
    "testId", " string", "Yes", "", "Identifier for testing purposes"
    "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
    "value", " string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    :header: "Constant", "Values", "Usage"

   "LABEL_POSITION", "Contained, Top, Bottom, Start, End", "Allows for the positioning of the label"
   

.. admonition:: Testing Identifier

   Provided by the property *testId*