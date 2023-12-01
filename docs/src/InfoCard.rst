InfoCard
~~~~~~~~

*Overview*

Component providing standard delivery of information/errors/warnings

.. figure:: /images/infoCard.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { InfoCard } from '@ska-telescope/ska-gui-components';

   ...

   <InfoCard color={InfoCardColorTypes.Info} message="infoCard.message" testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "clickFunction", "Function", "No", "null", "Executed if the component is clicked"
   "color", "AlertColorTypes", "No", "Info", "Identifies the coloring for the alert"
   "fontSize", "number", "No", "35", "Determines the size of the displayed text/symbol"
   "message", "string", "Yes", "", "Title that is used for the element"
   "showStatus", "boolean", "No", "false", "When true also shows appropriate status component"
   "showStatusIcon", "boolean", "No", "true", "Displays symbol within the status when shown"
   "testId", "string", "Yes", "", "Identifier for testing purposes"
   "variant", "AlertVariantTypes", "No", "Outlined", "Styling option"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*