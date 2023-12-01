Alert
~~~~~

*Overview*

Panel that is colored dependant upon the property provided

*Usual implementation is that outlined is used for light mode, and filled for dark mode.*

.. figure:: /images/alert.png
   :width: 90%

.. admonition:: Example

   import { Alert } from '@ska-telescope/ska-gui-components';

   ...

   <AlertCard severity={severity} testId="testId" >

       CHILDREN defined are displayed in here
       
   </AlertCard>
   
.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "action", "function", "No", "", "Allows for an onClick activity"
    "ariaDescription", "string", "No", "", "Used by Screen Readers"
    "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "color", "AlertColorTypes", "No", "Info", "Identifies the coloring for the alert"
    "children", "JSX.Element", "No", "", "Allows for content to be added within the alert"
    "variant", "AlertVariantTypes", "No", "Outlined", "Styling option"
    "testId", "string", "Yes", "", "Used for testing purposes"
    
.. admonition:: Constants

   - AlertColorTypes : 'error', 'secondary', 'success', 'warning'

   - AlertVariantTypes : 'filled', 'outlined'

.. admonition:: Testing Identifier

   Provided by the property *testId*
