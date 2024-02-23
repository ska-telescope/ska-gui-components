ButtonToggle
~~~~~~~~~~~~

*Overview*

Button group showing 2 options, one of which must be active

.. code-block:: sh
   :caption: Example : Default usage

.. figure:: /images/buttonToggle.png
   :width: 90%

   import { ButtonToggle } from '@ska-telescope/ska-gui-components';

   ...

   <ButtonToggle data={data} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "ButtonToggle", "Used by Screen Readers"
   "current", "string", "Yes", "", "Value of the currently active element"
   "disabled", "boolean", "false", "", "Allows the group to be disabled"
   "label", "string", "Yes", "", "aria-label value"
   "options", "object", "Yes", "", "{ id: string, label: string, value: any}[]  Max 2"
   "setValue", "function", "Yes", "", "Function to update the value when clicked"
   "testId", "string", "No", "SPECIAL", "Value is ""telescopeSelectorId"" for this component"
   "toolTip", "string", "No", "''", "Optional toolTip for the toggle"
   "value", "object", "Yes", "", "Object of the currently active element"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*