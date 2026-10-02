
Logo
~~~~

*Overview*

This is the SKAO logo. It is unlikely that this will be needed directly as it is currently 
used as part of the standard header

.. figure:: /images/logo.png
   :width: 90%

.. admonition:: Example :  Mode determined by the provided function isDark()
   
   import { Logo, LOGO_DEFAULT_HEIGHT } from '@ska-telescope/ska-gui-components';


   <Logo dark={isDark()}/>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "dark",  "boolean", "No", "false", "Used to present the logo in the appropriate coloring for the mode"
   "height","number", "No", "LOGO_DEFAULT_HEIGHT", "Specifies the height of the logo"

.. admonition:: Constants

   - LOGO_DEFAULT_HEIGHT : Provided so can be used to standardize icons as needed ( Value = 30 )

.. admonition:: Testing Identifier

   Fixed with the value *skaoLogo*