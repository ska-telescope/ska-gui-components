NumberEntry
~~~~~~~~~~~

*Overview*

Field for entering numbers into the application. Provides a spinner

.. figure:: /images/numberEntry.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { NumberEntry } from '@ska-telescope/ska-gui-components';

   ...

   <NumberEntry label={ENTRY_FIELD_LABEL} testId="testId" value={ENTRY_FIELD_VALUE} />


.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "ariaDescription", "string", "No", "''", "Description that is used by screen readers"
    "ariaTitle", "string", "No", "''", "Title that is used by screen readers"
    "disabled", "boolean", "No", "false", "Disables the component if true"
    "errorText", "string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", "string", "No", "''", "Displayed is there is a value"
    "height", "number", "No", "45", "Allows for the height of the component to be adjusted"
    "inputRef", "string", "No", "", "Allows the field entry to be accessed by reference if needed"
    "label", "string", "Yes", "", "Label displayed for the Component"
    "labelBold", "boolean", "No", "false", "Label is displayed in bold unless disabled"
    "labelPosition", "LABEL_POSITION", "No", "CONTAINED", "Allows for the positioning of the label"
    "labelWidth", "number", "No", "4", "Sets the width of the label for LABEL_POSITION.START & LABEL_POSITION.END labelPositions"
    "name", "string", "No", "", "Allows for the field to be referenced and is separate to the testId"
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "prefix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon before the number"
    "required", "boolean | string", "No", "false", "Asterisk is added to the label if true, if string also populates the error"
    "setValue", "function", "No", "null", "Used to update the value onChange"
    "suffix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon after the number"
    "testId", "string", "Yes", "Identifier for testing purposes"
    "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

   :header: "Constant", "Values", "Usage"

   "LABEL_POSITION", "Contained, Top, Bottom, Start, End", "Allows for the positioning of the label"

.. admonition:: Testing Identifier

   Provided by the property *testId*