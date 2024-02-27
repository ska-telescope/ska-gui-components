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
    "label", "string", "Yes", "", "Label displayed for the Component"
    "onFocus", "Function", "No", "", "Function executed when the component is active"
    "prefix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon before the number"
    "required", "boolean", "No", "false", "Asterisk is added to the label if true"
    "setValue", "function", "No", "null", "Used to update the value onChange"
    "suffix", "string | JSX.Element", "No", "''", "Allows for the addition of characters/icon after the number"
    "testId", "string", "Yes", "Identifier for testing purposes"
    "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*