TelescopeSelector
~~~~~~~~~~~~~~~~~

*Overview*

Specialized selection of a specific telescope from all available

.. code-block:: sh
   :caption: Example : Default usage

   import { TelescopeSelector } from '@ska-telescope/ska-gui-components';

   ...

   <TelescopeSelector data={data} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

      "ariaDescription", "string", "No", "''", "Description that is used by screen readers"
      "ariaTitle", "string", "No", "''", "Title that is used by screen readers"
      "current", "string", "Yes", "", "Value of the currently active element"
      "disabled", "boolean", "No", "false", "disable/enable the component"
      "setValue", "function", "Yes", "", "Function to update the value when clicked"
      "testId", "string", "Yes", "", "Identifier for testing purposes"
      "toolTip", "string", "No", "''", "Optional toolTip for the toggle"
      "value", "object", "Yes", "", "Object of the currently active element"

.. admonition:: Constants

   none

.. admonition:: Testing Identifier

   Provided by the property *testId*