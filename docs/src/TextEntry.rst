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
    "labelBold", "boolean", "No", "false", "Label is displayed in bold unless disabled"
    "labelPosition", "LABEL_POSITION", "No", "LABEL_POSITION.CONTAINED", "Allows for the positioning of the label"
    "labelWidth", "number", "No", "4", "Sets the width of the label for LABEL_POSITION.START & LABEL_POSITION.END labelPositions"
    "mask", "string", "No", "", "Used to allow the field to be masked ( See below ) "
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "password", "boolean", "No", "false", "Value entered is obscured"
    "prefix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon before the entry"
    "required", "boolean", "No", "false", "Asterisk is added to the label if true"
    "rows", "number", "No", "1", "TEXT ONLY.  text area when value is above 1"
    "setValue", "function", "No", "null", "Used to update the value onChange"
    "suffix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon after the entry"
    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

   :header: "Constant", "Values", "Usage"

   "LABEL_POSITION", "Contained, Top, Bottom, Start, End", "Allows for the positioning of the label"

.. admonition:: Masking

   :header: "Character(s)", "Details"

   "0", "Any digit"
   "a", "Any letter"
   "*", "Any character"
   "[]", "Make input optional"
   "()", "Include fixed part in unmasked value"

.. admonition:: Testing Identifier

   Provided by the property *testId*