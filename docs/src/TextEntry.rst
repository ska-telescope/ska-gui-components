**TextEntry**
~~~~~~~~~

*Overview*

Field for entering text into the application

.. code-block:: sh
   :caption: 

   import { TextEntry } from '@ska-telescope/ska-gui-components';

   ...

   <TextEntry label="TextEntry Label testId="testId" value={ENTRY_FIELD_VALUE} />

*Properties*
.. csv-table::
   :header: "Property", "Type", "Required", "default", ""
   "disabled", " boolean", "    No", " false", " Disables the component if true"
   "errorText", " string", "    No", " ''", " Displayed if there is a value and component is coloured"
   "helperText", " string", "    No", " ''", " Displayed is there is a value"
   "label", " string", "    Yes", "", " Label displayed for the Component"
   "password", " boolean", "    No", " false", " Value entered is obscured"
   "prefix", " string", "    No", " ''", " Allows for the addition of characters before the number"
   "required", " boolean", "    No", " false", " Asterisk is added to the label if true"
   "rows", " number", "    No", " 1", " TEXT ONLY.  text area when value is above 1"
   "setValue", " function", "    No", " null", " Used to update the value onChange"
   "suffix", " string", "    No", " ''", " Allows for the addition of characters after the number"
   "testId", " string", "    Yes", "", " Identifier for testing purposes"
   "value", " string", "    Yes", "", " Value that is displayed within the component"

.. admonition:: Constants

.. admonition:: Testing Identifier

   Provided by the property *testId*