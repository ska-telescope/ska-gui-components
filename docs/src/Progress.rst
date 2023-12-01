Progress
~~~~~~~~

*Overview*

Indicator that there is an activity ongoing
Often used in conjunction with the Backdrop component

*Image not applicable for this component*

.. code-block:: sh
   :caption: Example : Default usage

   import { Progress } from '@ska-telescope/ska-gui-components';

   ...

   <Progress testId="testId" />

   
.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "determinate", "boolean", "No", "false", "if true the value used to for the display determination"
   "indicator", "string", "No", "circle", "Can be circle, line or none"
   "label", "boolean", "No", "false", "if true, then the value is also displayed"
   "size", "number", "No", "40", "Allows for the changing of the Progress size"
   "testId", "string", "Yes", "", "Used for testing purposes"
   "value", "number", "No", 0, "Can be used to determine display characteristics"

    
.. admonition:: Constants

   none

.. admonition:: Testing Identifier

   Provided by the property *testId*