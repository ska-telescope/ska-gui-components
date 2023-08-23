Backdrop
~~~~~~~~

*Overview*

Panel that inhibits activity upon the screen when active.  
Often used with the Progress component

.. code-block:: sh
   :caption: Example : Default usage

   import { Backdrop } from '@ska-telescope/ska-gui-components';

   ...

   <Backdrop open={open} >
     
     ...

    </Backdrop>
   
.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "open", "boolean", "No", "Yes", "Determines if the panel is active"
   "visible", "boolean", "No", "No", "IF visible the panel has a semi-opaque grey colouring"
    
.. admonition:: Constants

   none

.. admonition:: Testing Identifier

   none