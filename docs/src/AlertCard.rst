**AlertCard**
~~~~~~~~~

*Overview*

Panel that is colored dependant upon the most-urgent status valued element provided

.. code-block:: sh
   :caption: Example : Default usage

   import { AlertCard } from '@ska-telescope/ska-gui-components';

   ...

   <AlertCard array={ALERT_CARD_DATA} testId="testId" title="AlertCard Title" />

*Properties*

.. csv-table::
   :header: "Property", "Type", "Required", "default", ""
   "size","number", "No", "90", "Defines the size of the space in pixels"
   "axis","string", "No", "SPACER_HORIZONTAL", "SPACER_HORIZONTAL or SPACER_VERTICAL permitted"

    "array", "array", "Yes", "", "See below"
    "clickFunction", "Function", "No", "null", "Executed if the component is clicked"
    "filled", "boolean", "No", "false", "Determines if component is filled or outlined"
    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "title", "string", "Yes", "", "Title that is placed top-left of the Component"

*Array element values*

.. csv-table:: Example :rst:dir:
   :header: "Property", "Type", "Required", "Default", ""

    "hideValue", "boolean", "No", "false", "If true, display of <strong>value<strong> is suppressed"|
    "level", "number", "Yes", "", "Symbol that is placed top-left of the Component"
    "title", "string", "No", "''", "Title that is used for the element"
    "value", "number", "Yes", "", "Value that is used to determine the coloring to be used"

.. admonition:: Constants

.. admonition:: Testing Identifier

   Provided by the property *testId*