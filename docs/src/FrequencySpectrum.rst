FrequencySpectrum
~~~~~~~~~~~~~~~~~~

*Overview*

Displays a frequency band within a spectrum as a highlighted bar, positioned and sized relative to
the overall minimum and maximum frequency. Optionally shows edge markers for a permitted range, and
colours the band to indicate whether it breaches the overall range or the permitted edges.

.. figure:: /images/frequencySpectrum.png
   :width: 90%

.. code-block:: sh
   :caption: Example : Default usage

   import { FrequencySpectrum } from '@ska-telescope/ska-gui-components';

   ...

   <FrequencySpectrum
      minFreq={50}
      maxFreq={350}
      centerFreq={200}
      bandWidth={100}
      minEdge={75}
      maxEdge={325}
      unit="MHz"
   />

.. csv-table:: Properties
   :header: "Property", "Type", "Required", "default", ""

   "actual", "boolean", "No", "false", "If true, the band fills the entire bar and the value is displayed within it, rather than showing it positioned/sized relative to the range"
   "bandColor", "string", "No", "theme.palette.primary.light", "Allows for the default band colour to be overridden"
   "bandColorContrast", "string", "No", "theme.palette.primary.contrastText", "Allows for the default band label colour to be overridden"
   "bandWidth", "number", "No", "", "Width of the highlighted band"
   "boxWidth", "string", "No", "400px", "Allows for the overall width of the component to be changed"
   "centerFreq", "number", "No", "", "Center frequency of the highlighted band"
   "displayBoundaryInUnits", "number", "No", "5", "Padding added either side of minFreq/maxFreq when calculating the displayed range (ignored when actual is true)"
   "maxEdge", "number", "No", "maxFreq", "Upper bound of the permitted range; if less than maxFreq, an edge marker is displayed"
   "maxFreq", "number", "No", "", "Maximum frequency of the overall range"
   "minEdge", "number", "No", "minFreq", "Lower bound of the permitted range; if greater than minFreq, an edge marker is displayed"
   "minFreq", "number", "No", "", "Minimum frequency of the overall range"
   "unit", "string", "No", "MHz", "Unit displayed alongside frequency values"

.. admonition:: Band colour

   The band is coloured using the *bandColor*/*bandColorContrast* properties by default. If the band
   breaches minFreq/maxFreq it is coloured using the theme's error colour, and if it breaches
   minEdge/maxEdge it is coloured using the theme's warning colour.
