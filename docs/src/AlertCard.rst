AlertCard
~~~~~~~~~

*Overview*

Panel that is colored dependant upon the most-urgent colored valued element provided
The ordering of the colors is  Error, Warning, Success & Info. 

*See also Alert*

.. figure:: /images/alertCard.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { AlertCard } from '@ska-telescope/ska-gui-components';

   ...

   <AlertCard array={ALERT_CARD_DATA} testId="testId" title="AlertCard Title" />
   
.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "action", "function", "No", "", "Action to be taken onClick on the panel"
   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "array", "Object", "Yes", "", "See below"
   "clickFunction", "Function", "No", "null", "Executed when the individual card element is clicked"
   "variant", "AlertVariantTypes", "No", "AlertVariantTypes.Outlined", "Styling option"
   "showStatus", "boolean", "No", "true", "Allows for the appropriate status icon component to be displayed"
   "showStatusIcon", "boolean", "No", "true", "Allows for the appropriate symbol on the status icon to be displayed"
   "testId", "string", "Yes", "", "Used for testing purposes"
   "title", "string", "Yes", "", "Displayed at the top of the Card"

.. csv-table:: array values
   :header: "Property", "Type", "Required", "default", ""

   "color", "AlertColorTypes", "Yes", "", "Coloring of the card element" 
   "hideValue", "boolean", "No", "false", "If true, display of <strong>value<strong> is suppressed"
   "title", "string", "No", "''", "Title that is used for the element"
   "value", "number", "Yes", "", "Value that is used to determine the coloring to be used"
   "variant", "AlertVariantTypes", "Yes", "", "Styling option"
    
.. admonition:: Constants

   none

.. admonition:: Testing Identifier

   Provided by the property *testId*