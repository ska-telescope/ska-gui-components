Welcome to ska-gui-components documentation!
============================================

This is a JavaScript library contained low level components and utilities for use within SKAO GUI applications.
It makes use of the following:

Material-UI ( version 5 ) - Ensures that the SKAO theme is implemented in a consistent manner
ska-javascript-components - JavaScript library containing functionality that does not require Material-UI

Note that functionality that is available from the ska-javascript-components library has been made available via this library
so that separate inclusion is not required.

Every effort has been made to ensure that all components have a unique means of identification for testing purposes,
as well as implementation of standard properties to allow for maximum accessibility for those that have access limitations

.. Note:: 

   - If you require the application to include authentication as standard, please also check out the `ska-login-page` repository, which provides
     a number of options that will help to achieve that requirement

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   Usage
   Functionality
   JavascriptComponents
   Alert
   AlertCard
   AppWrapper
   Backdrop
   Button
   ButtonToggle
   DataGrid
   DataTree
   DateEntry
   DropDown
   FileUpload
   Footer
   Header
   IconButton
   Icons
   InfoCard
   NumberEntry
   Progress
   TelescopeSelector
   TextEntry
   TickBox
   SearchEntry
   StatusIcon
   version