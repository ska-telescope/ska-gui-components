**ButtonToggle**
~~~~~~~~~

*Overview*

Button group showing 2 options, one of which must be active

.. code-block:: sh
   :caption: Example : Default usage

   import { ButtonToggle } from '@ska-telescope/ska-gui-components';

   ...

   <ButtonToggle data={data} testId="testId" />

*Properties*

.. csv-table:: Example :rst:dir:
   :header: "Property", "Type", "Required", "default", ""
   "current", "string", "Yes", "", "Value of the currently active element"
   "label", "string", "Yes", "", "aria-label value"
   "options", "object", "Yes", "", "{ id: string, label: string, value: any}[]  Max 2"
   "setValue", "function", "Yes", "", "Function to update the value when clicked"
   "testId", "string", "No", "SPECIAL", "Value is "telescopeSelectorId" for this component"
   "toolTip", "string", "No", "''", "Optional toolTip for the toggle"
   "value", "object", "Yes", "", "Object of the currently active element"

.. admonition:: Constants

.. admonition:: Testing Identifier

   Provided by the property *testId*