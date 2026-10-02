
Symbol
~~~~~~

*Overview*

This is the SKAO symbol. It is unlikely that this will be needed directly as it is currently 
used as part of the standard header from within the *ska-gui-components* library

.. figure:: /images/symbol.png
   :width: 90%

.. admonition:: Example :  Mode determined by the provided function isDark()
   
   import { Symbol, SYMBOL_DEFAULT_HEIGHT } from '@ska-telescope/ska-gui-components';


   <Symbol dark={isDark()}/>

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "dark",  "boolean", "No", "false", "Used to present the symbol in the appropriate coloring for the mode"
   "height","number", "No", "SYMBOL_DEFAULT_HEIGHT", "Specifies the height of the Symbol"

.. admonition:: Constants

   - SYMBOL_DEFAULT_HEIGHT : Provided so can be used to standardize icons as needed ( Value = 30 )

.. admonition:: Testing Identifier

   Fixed with the value *skaoSymbol*