IconButton
~~~~~~~~~~

*Overview*

IconButton for use with all applications.
This is used if user actions are required, but there is not an associated label due to design or space restrictions.

.. code-block:: sh
   :caption: Example : Default usage

   import { IconButton } from '@ska-telescope/ska-gui-components';

   ...

   <IconButton icon={<MyLocationIcon />} testId="testId" toolTip={TOOLTIP} />


.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
   "onClick", "Function", "No", "null", "Determines actions to be taken when the button is clicked"
   "icon", "JSX.Element", "Yes", "", "Required as the main part of the IconButton"
   "testId", "string", "Yes", "", "Identifier for testing purposes"
   "toolTip", "string", "No", "", "Text displayed when the cursor is hovered over the button"
    
.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*