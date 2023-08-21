Button
~~~~~~

*Overview*

Button for use with all applications

.. code-block:: sh
   :caption: Example : Default usage

   import { Button } from '@ska-telescope/ska-gui-components';

   ...

   <Button data={data} testId="testId" />


.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "color", "string", "No", "", "Color options : ButtonColorType"
    "disabled", "boolean", "No", "false", "Disabled when true"
    "icon", "JSX.Element", "No", "null", "Prefixes the label when present"
    "label", "string", "Yes", "", "Test displayed upon the button"
    "onClick", "Function", "No", "null", "Determines actions to be taken when the button is clicked"
    "testId", "string", "Yes", "", "Identifier for testing purposes"
    "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
    "variant", "string", "No", "outlined", "Styling options : ButtonVariantType"
    
.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*