InfoCard
~~~~~~~~

*Overview*

Component providing standard delivery of information/errors/warnings. 
It also has the ability to display children which will occur under any provided message text

.. figure:: /images/infoCard.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { InfoCard } from '@ska-telescope/ska-gui-components';

   ...

   <InfoCard color={InfoCardColorTypes.Info} message="infoCard.message" testId="testId" >
      {children}
   </InfoCard>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "clickFunction", "Function", "No", "null", "Executed if the component is clicked"
   "color", "AlertColorTypes", "No", "Info", "Identifies the coloring for the alert"
   "fontSize", "number", "No", "35", "Determines the size of the displayed text/symbol"
   "maxHeight", "string", "No", "", "Allows for a maximum height of the card to be provided"
   "message", "string", "No", "", "Title that is used for the element"
   "showStatus", "boolean", "No", "false", "When true also shows appropriate status component"
   "showStatusIcon", "boolean", "No", "true", "Displays symbol within the status when shown"
   "testId", "string", "No", "infoCard-testId", "Identifier for testing purposes"
   "variant", "AlertVariantTypes", "No", "Outlined", "Styling option"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*