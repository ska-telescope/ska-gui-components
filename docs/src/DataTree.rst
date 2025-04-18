DataTree
~~~~~~~~

*Overview*

Passing data out of a JSON.parse() will produce an expandable TreeView of the data

.. figure:: /images/dataTree.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { DataTree } from '@ska-telescope/ska-gui-components';

   ...

   <DataTree data={data} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "ariaDescription", "string", "No", "", "Used by Screen Readers"
   "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "data", "number", "Yes", "''", "Symbol that is placed top-left of the Component"
    "height", "number", "No", "264", "Determines the height that the component will use"
    "maxWidth", "number", "No", "400", "Determines the width that the component will use"
    "testId", "string", "No", "dataTree-testId", "Identifier for testing purposes"

.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*