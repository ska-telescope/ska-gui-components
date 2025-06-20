Button
~~~~~~

*Overview*

Button for use with all applications.

.. tip:: 

   - It is expected that an appropriate icon will be provided into the icon property.
     For a list icons currently in use, please refer to the icons section of this guide

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
   "component", "string", "No", "button", "The component used for the root node. Either a string to use a HTML element or a component"
   "disabled", "boolean", "No", "false", "Disabled when true"
   "icon", "JSX.Element | string", "No", "null", "Prefixes the label when present. If string, Standard Icon of appropriate type is displayed"
   "label", "string", "Yes", "", "Test displayed upon the button"
   "onClick", "Function", "No", "null", "Determines actions to be taken when the button is clicked"
   "size", "ButtonSizeTypes", "No", "ButtonSizeTypes.Medium", "Allows for the sizing of the button to be changed"
   "testId", "string", "No", "button-{{label}}", "Identifier for testing purposes"
   "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
   "toolTipPlacement". "string", "No", "bottom", "Allows for the positioning of the tooltip to be moved from the default"
   "variant", "string", "No", "outlined", "Styling options : ButtonVariantType"
    
.. admonition:: Constants

   :header: "Constant", "Usage"

   "ButtonColorTypes.Error",  "Sets the color of the button to the ERROR color.  ( may cause accessibility issues ) "
   "ButtonColorTypes.Inherit", "Sets the color of the button to inherit from its parent."
   "ButtonColorTypes.Secondary", "Sets the color of the button to the SECONDARY color of the theme "
   "ButtonColorTypes.Success", "Sets the color of the button to the SUCCESS color.  ( may cause accessibility issues ) "
   "ButtonColorTypes.Warning", "Sets the color of the button to the WARNING color.  ( may cause accessibility issues ) "
   "ButtonIcons.?????", "Displayed if provided"
   "ButtonSizeTypes.Small", "Allows for the sizing of the button to be changed"
   "ButtonSizeTypes.Medium", "Allows for the sizing of the button to be changed"
   "ButtonSizeTypes".Large", "Allows for the sizing of the button to be changed"
   "ButtonVariantTypes.Contained", "Allows for the styling of the button to be changed (Recommended)"
   "ButtonVariantTypes.Outlined", "Allows for the styling of the button to be changed"
   "ButtonVariantTypes.Text", "Allows for the styling of the button to be changed"

.. admonition:: Testing Identifier

   Provided by the property *testId*