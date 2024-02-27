TelescopeSelector
~~~~~~~~~~~~~~~~~

*Overview*

Specialized selection of a specific telescope from all that are available.
Note that this interacts directly with the REDUX storage implemented by the ska-gui-local-storage library

.. figure:: /images/telescopeSelector.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { TelescopeSelector } from '@ska-telescope/ska-gui-components';

   ...

   <TelescopeSelector data={data} testId="testId" />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

      "ariaDescription", "string", "No", "''", "Description that is used by screen readers"
      "ariaTitle", "string", "No", "''", "Title that is used by screen readers"
      "disabled", "boolean", "No", "false", "disable/enable the component"
      "toolTip", "string", "No", "''", "Optional toolTip for the toggle"

.. admonition:: Constants

   none

.. admonition:: Testing Identifier

   Provided by the property *testId*