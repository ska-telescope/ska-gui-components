**Alert**
~~~~~

*Overview*

Panel that is colored dependant upon the status number provided

.. code-block:: sh
   :caption: Example : Default usage

   import { Alert } from '@ska-telescope/ska-gui-components';

   ...

   <AlertCard severity={severity} testId="testId" />
   
.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "filled", "boolean", "No", "false", "Styling option"
   "severity", "number", "Yes", "", "border/fill is coloured dependant upon this value [ 0 - 5]"
   "testId", "string", "Yes", "", "Used for testing purposes"
    
.. admonition:: Constants

.. admonition:: Testing Identifier

   Provided by the property *testId*