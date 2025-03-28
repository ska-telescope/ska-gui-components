SearchEntry
~~~~~~~~~~~

*Overview*

Field for entering search text into the application

.. figure:: /images/searchEntry.png
   :width: 90%

.. code-block:: sh

   import { SearchEntry } from '@ska-telescope/ska-gui-components';

   ...

   <SearchEntry label="SearchEntry Label testId="testId" value={ENTRY_FIELD_VALUE} />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "ariaDescription", "string", "No", "", "Used by Screen Readers"
    "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "disabled", "boolean", "No", "false", "Disables the component if true"
    "errorText", "string", "No", "''", "Displayed if there is a value and component is coloured"
    "helperText", "string", "No", "''", "Displayed is there is a value"
    "label", "string", "Yes", "", "Label displayed for the Component"
    "setValue", "function", "No", "null", "Used to update the value onChange"
    "testId", "string", "No", "searchEntry-{label}", "Identifier for testing purposes"
    "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
    "toolTipPlacement". "string", "No", "bottom", "Allows for the positioning of the tooltip to be moved from the default"
    "value", "string", "Yes", "", "Value that is displayed within the component"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*