DataGrid
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
    "checkboxSelection", "boolean", "No", "false", "Adds checkboxes as the first column"
    "columns", "number", "Yes", "", "Array containing the column specifics"
    "columnVisibilityModel", "any", "No", "", "Ability to dynamically show/hide columns"
    "getRowHeight", "Function", "No", "auto", "Ability to pass in a function to calculate the row height.  Auto determined by default"
    "height", "number", "No", "264", "Determines the height that the component will use"
    "initialState", "object", "No", "", "Sets the initial state of the DataGrid"
    "onColumnVisibilityModelChange", "any", "No", "Used to listen to the changes to the visible columns and update the prop accordingly", 
    "onRowClick", "function", "No", "", "Action if the row is clicked"
    "onCellClick", "function", "No", "", "Action if a cell is clicked"
    "onRowSelectionModelChange", "function", "No", "", "Used to obtain the selected rows from the dataGrid"
    "rows", "array", "Yes", "", "Data that is to be presented"    
    "rowSelectionModel", "array", "No", "", "Used to populate the dataGrid with selected rows"
    "showBorder", "boolean", "No", "", "When active, the border for the component is displayed"
    "showMild", "boolean", "No", "", "When active, the selected colouring is restricted to a lower contrast"
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