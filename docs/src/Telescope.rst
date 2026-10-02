Telescope
~~~~~~~~~

*Overview*

Standard telescope type and objects for use within any application. 

.. admonition:: Example

   import { TelescopeList, TELESCOPE_LOW, TELESCOPE_MID } from '@ska-telescope/ska-gui-components';
   
   Note that the Telescope object will be NULL or either of the provided constants

.. admonition:: Properties
   
    :header: "Property", "Type", ""

    "code",  "string", "Code for the telescope"
    "name","string", "Display name for the telescope"
    "location","string", "Name of the primary location of the telescope"
    "position", "object", "Made up of the latitude and longitude of the telescope"
    "image", "string", "URL to a stock image of the telescope"

.. admonition:: Constants
   
   TelescopeList, TELESCOPE_LOW, TELESCOPE_MID

.. admonition:: Testing Identifier

   Not applicable