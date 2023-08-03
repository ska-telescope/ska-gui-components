**DataTree**
~~~~~~~~~

*Overview*

Passing data out of a JSON.parse() will produce an expandable TreeView of the data

.. code-block:: sh
   :caption: Example : Default usage

   import { DataTree } from '@ska-telescope/ska-gui-components';

   ...

   <DataTree data={data} testId="testId" />

*Properties*

.. csv-table:: Example :rst:dir:
   :header: "Property", "Type", "Required", ""
   "data", "number", "Yes", "''", "Symbol that is placed top-left of the Component"
   "height", "number", "No", "264", "Determines the height that the component will use"
   "maxWidth", "number", "No", "400", "Determines the width that the component will use"
   "testId", "string", "Yes", "", "Identifier for testing purposes"

.. admonition:: Constants

.. admonition:: Testing Identifier

   Provided by the property *testId*