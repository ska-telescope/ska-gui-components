**DropDown**
~~~~~~~~~

*Overview*

Field for selecting an option from a possible list

.. code-block:: sh
   :caption: Example : Default usage

   import { DropDown } from '@ska-telescope/ska-gui-components';

   ...

   <DropDown label="DropDown Label" options={DROP_DOWN_OPTIONS} testId="testId" value={DROP_DOWN_VALUE} />

.. admonition:: Properties
   .. csv-table::
      :header: "Property", "Type", "Required", "default", ""

        "disabled", "boolean", "No", "false", "Disables the component if true"
        "errorText", "string", "No", "''", "Displayed if there is a value and component is coloured"
        "helperText", "string", "No", "''", "Displayed is there is a value"
        "label", "string", "Yes", "", "Label displayed for the Component"
        "options", "*", "Yes", "", "Options to be displayed for selection.  See below"
        "required", "boolean", "No", "false", "Asterisk is added to the label if true"
        "setValue", "function", "No", "null", "Used to update the value onChange"
        "testId", "string", "Yes", "", "Identifier for testing purposes"
        "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*