**InfoCard**
~~~~~~~~~

*Overview*

Component providing standard delivery of information/errors/warnings

.. code-block:: sh
   :caption: Example : Default usage

   import { InfoCard } from '@ska-telescope/ska-gui-components';

   ...

   <InfoCard filled={INFO_FILLED} level={INFO_LEVEL} message={INFO_MESSAGE} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "clickFunction", "Function", "No", "null", "Executed if the component is clicked"
    "filled", "boolean", "No", "false", "Determines if component is filled or outlined"
    "fontSize", "number", "No", "35", "Determines the size of the displayed text/symbol"
    "level", "number", "Yes", "", "Symbol that is placed top-left of the Component"
    "message", "string", "Yes", "", "Title that is used for the element"
    "testId", "string", "Yes", "", "Identifier for testing purposes"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*