Button
~~~~~~

*Overview*

Button for use with all applications.
The expectation that an appropriate icon will be provided, which is displayed to the left of the label.

.. figure:: /images/button.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { Button } from '@ska-telescope/ska-gui-components';

   ...

   <Button data={data} testId="testId" />


.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "color", "string", "No", "", "Color options : ButtonColorType"
   "disabled", "boolean", "No", "false", "Disabled when true"
   "icon", "JSX.Element", "No", "null", "Prefixes the label when present"
   "label", "string", "Yes", "", "Test displayed upon the button"
   "onClick", "Function", "No", "null", "Determines actions to be taken when the button is clicked"
   "size", "ButtonSizeTypes", "No", "ButtonSizeTypes.Medium", "Allows for the sizing of the button to be changed"
   "testId", "string", "Yes", "", "Identifier for testing purposes"
   "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
   "variant", "string", "No", "outlined", "Styling options : ButtonVariantType"
    
.. admonition:: Constants

   :header: "Constant", "Values", "Usage"

   "ButtonColorTypes", "Error,Inherit,Secondary,Success,Warning", "Allows for the colouring of the button to be changed"
   "ButtonSizeTypes", "Small, Medium, Large", "Allows for the sizing of the button to be changed"
   "ButtonVariantTypes", "Contained,Outlined,Text", "Allows for the styling of the button to be changed"

.. admonition:: Testing Identifier

   Provided by the property *testId*