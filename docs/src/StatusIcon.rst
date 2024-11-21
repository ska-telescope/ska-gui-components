StatusIcon
~~~~~~~~~~

*Overview*

Provides one of a number of coloured shapes that can be used to help distinguish the various status levels.
These have been taken from the engineering standards, and additional logos were added.
This also will provide fixed symbol display for the icons

.. figure:: /images/statusIcon.png
   :width: 90%

.. admonition:: Example

   import { StatusIcon } from '@ska-telescope/ska-gui-components';


   <Status testId="statusTestId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "children", "React.ReactElement | string", "No", "", "Allows for content to be placed upon the Icon"
   "icon", "boolean", "No", "false", "Option to display the fixed symbol upon the Object"
   "level","number", "No", "9", "Valid range is 0 - 5. Anything outside that range is empty. Success = 0."
   "size","number", "No", "12", "This provides both height & width"
   "testId","string", "Yes", , "Unique identifier used for testing"
   "text","string", "No", "", "String that will be displayed upon the shape.  Single character only recommended"
   "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"

.. admonition:: Constants
      
   None

.. admonition:: Testing Identifier

   Provided by the property *testId*