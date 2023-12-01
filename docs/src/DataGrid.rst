DataTree
~~~~~~~~

*Overview*

Given the provided data, will provide a table of contents

.. figure:: /images/dataGrid.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { DataGrid } from '@ska-telescope/ska-gui-components';

   ...

   <DataGrid columns={DUMMY_COLUMNS} rows={DUMMY_ROWS} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

    "ariaDescription", "string", "No", "", "Used by Screen Readers"
    "ariaTitle", "string", "No", "AlertCard", "Used by Screen Readers"
    "columns", "number", "Yes", "", "Array containing the column specifics ( See below ) "
    "height", "number", "No", "264", "Determines the height that the component will use"
    "onRowClick", "function", "No", "", "Action if the row is clicked"
    "rows", "array", "Yes" , "", "Data that is to be presented"
    "testId", "string", "Yes", "", "Identifier for testing purposes"

.. csv-table:: Columns
   :header: "Property", "Type", "Required", "default", ""

    "field", "string", "No", "", "Identifies the data element to be displayed"
    "headerName", "string", "No", "", "Text displayed above the column"
    "width", "number", "No", "", "Width of the column"


.. admonition:: Constants

    none

.. admonition:: Testing Identifier

   Provided by the property *testId*