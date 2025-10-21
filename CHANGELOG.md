Changelog
==========

2.3.42
******

Updated to 7.1.11 of vite

2.3.41
******

Tweak of Status Icon placement

2.3.40
******

Correction of hook placement

2.3.39
******

Added iconOffset as an optional property

2.3.38
******

Added iconSizingFactor as an optional property

2.3.37
******

Made the reduction optional

2.3.36
******

Reduced the sizing of the icons in the StatusIcon, and made text bold

2.3.35
******

Icon tweak for ? 

2.3.34
******

Needed to make the color theme aware

2.3.33
******

Changed the color for an invalid Status icon

2.3.32
******

Tweaks to AppWrapper and status

2.3.30
******

Color updates coming thru from the ska-javascript-components
Updated the footer so that content can specifically target the middle

2.3.29
******

Resolved audit notifications
Updated to latest ska-javascript-components library
Theme function updated to be able to be backwards compatible

2.3.28
******

Update MUI version and corrected the labelling position when left/right

2.3.27
******

Updated so that the feedback icon can be suppressed

2.3.26
******

Added Feedback optional icon added to Header & AppWrapper
Added TriStateCheckbox to library
Ability to suppress the underline for DropDown and TextField

2.3.25
******

Dropdown content can be individually disabled

2.3.24
******

Reset the background colouring

2.3.23
******

Remove console messages as the debug process has completed

2.3.22
******

Addition of the AppWrapper component, which simplifies and standardizes the application structure

2.3.19
******

Ensure that the telescope is obtained from Storage

2.3.18
******

Enforce the use of provided storage

2.3.17
******

Fix issue with footer tooltip

2.3.16
******

Button icon color now matches the colouring of the text
AppWrapper initial implementation

2.3.15
******

Updated so that labels for fields float to the left

2.3.14
******

Add property so that the maxHeight of the select menu can be limited

2.3.13
******

Ability to suppress scroller

2.3.12
******

Removed tags failing SemVer 

2.3.10
******

Input is now left justified, with further visual improvements being made

2.3.9
*****

Display adjustments, changing defaults and adding classic icon placement

2.3.8
*****

Fixed issue where NumberEntry2 was not displaying provided errorText

2.3.7
*****

Updated NumberEntry2

2.3.6
*****

Added aria to the new component 

2.3.5
*****

Tweaking the up/down arrow display 

2.3.4
*****

Added styling to <Item> as latest MUI version is styled with a border and background color
Corrected issue where the help icon was always being displayed

2.3.3
*****

Extended all components so that the placement of the tooltip can be moved from the default of Bottom

2.3.2
*****

Moved material-UI to v7

2.3.1
*****

Replaced all the MUI icons with internal SVG

2.3.0
*****

Striped out TreeView as it is not ES6

2.2.17
******

Seperating x-tree-view imports  ( other tags had an error in the package.json )

2.2.14
******

Updated pathing in package.json

2.2.13
******

Removed cjs output

2.2.12
******

Replaced Cypress with Vitest

2.2.11
******

Fix of version numbering mismatch

2.2.10
******

Reduced babel dependancies

2.2.9
*****

Exported the NumberEntry2 component 

2.2.8
*****

Updated the NumberEntry2 component

2.2.6
*****

Added index.js to the @mui/material/node/styles

2.2.4
*****

Added index.js to the @mui/material/node/styles

2.2.3
*****

Note added to the documentation main page to advise the reader of the existence of the ska-login-page

2.2.2
*****

Updated to 2.2.4 of ska-javascript-components  ( updates to vite & rollup dependencies )
All children properties now use the Children type

2.2.1
*****

added ability to add ref to a standard button

2.2.0
*****

Reset to a good version
ButtonLogin & ButtonLogout code added for later use 
Updated so that all components use the SKA IconButton
Added useBrowserStorage to the Header
Updated to Node v22
Ability to reverse the ordering in the TelescopeSelector
Ability to set the Alert border to none added

2.0.33

******

Added standard icons for Login & logout

2.0.32

******

Replaced DataGrid with one that has the ability to override the styling

2.0.31

******

filterModeServer needed to be optional

2.0.30

******

Added further styling to the DataGrid as well as a few further options

2.0.29

******

Added defaults to all testId properties and made optional
Added children to the infoCard to allow for increased display options

2.0.28

******

Dropzone adjustments

2.0.27

******

Dropzone adjustments

2.0.26

******

Display the preloaded filename in the dropzone if it exists

2.0.25

******

FileUpload component tuning, including adding the dropzoneAccepted property

2.0.24

******

Further tweaking to the ToolTips and FileUpload components

2.0.23

******

Added DropZone and used in the FIleLoad

2.0.22

******

Added tooltips to a number of the components

2.0.21

******

Data grid extended to allow for strings to be passed to the height property

2.0.20

******

Corrected issue with not being able to have 2 FileLoad components on the same page

2.0.19

******

Added isMinimal to the FileUpload to provide a smaller presentation component

2.0.18

******

Updated inputRef to be of type React.MutableRefObject<any>

2.0.17

******

Added support of onBlur for entry fields

2.0.16

******

Update dependencies & partial implementation of flatten.

2.0.15

******

Extended Button to be able to provide a range of standard Icons.

2.0.14

******

Updated version from ska-javascript-components

2.0.13

******

Added minHeight & maxHeight as an additional property to the InfoCard
Updated dependency to ska-javascript-components to provide SKAO Symbol

2.0.12 

******

Rebase mis-matched version numbers

2.0.11

******

Updated dependencies list

2.0.10

******

Updated to use the latest ska-javascript-components

2.0.9

*****

onFocus : Further updates

2.0.8

*****

onFocus updated for Entry fields

2.0.7

*****

TickBox : onFocus & onChange test for defined

2.0.6

*****

Updated onChange for TickBox

2.0.5

*****

Resolved issue with duplicate labelling for TickBox

2.0.3

*****

Set DataGrid default row height to 52px

2.0.2

*****

Changed SKAOLoader to Loader
Changed OurIconButton to IconButton

2.0.1

*****

Changed StylingDataGrid to DataGrid
Changed OurButton to Button

2.0.0

*****

Converted to use Vite

1.0.31

******

Updated the DataGrid to make rowSelectionModel visible

1.0.30

******

Updated the DataGrid to make onRowSelectionModelChange visible

1.0.29

******

* DateEntry
  * Addition of name property
  * Addition of inputRef property
* Dropdown
  * Addition of name property
  * Addition of inputRef property
* NumberEntry
  * Addition of name property
  * Addition of inputRef property
* TextEntry
  * Addition of name property
  * Addition of inputRef property

