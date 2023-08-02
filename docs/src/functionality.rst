Functionality
=============

Here is a list of the available functionality, together with sample usage and the associated properties.

**Functionality from ska-javascript-components library**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All of the functionality that has built into the `ska-javascript-components` library has been included into
this library for convenience as many of them have been used within this library as a basis.
To see the functionality provided, please refer to the library documentation

**AlertCard**
~~~~~~~~~

*Overview*
*--------*

Panel that is colored dependant upon the most-urgent status valued element provided

*Example Usage*
*-------------*

`import { AlertCard } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<AlertCard array={ALERT_CARD_DATA} filled={ALERT_CARD_FILLED} testId="testId" title={ALERT_CARD_TITLE} />`
Uses the defaults as per the properties below
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| array         | array    |    Yes   |                | See below                                               |
| clickFunction | Function |    No    | null           | Executed if the component is clicked                    |
| filled        | boolean  |    No    | false          | Determines if component is filled or outlined           |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| title         | string   |    Yes   |                | Title that is placed top-left of the Component          |

*Array element values*
*--------------------*

| Property  | Type    | Required | Default             | Notes                                                   |
| --------- | ------- | -------- | ------------------- | ------------------------------------------------------- |
| hideValue | boolean |    No    | false               | IF true, display of <strong>value<strong> is suppressed |
| level     | number  |    Yes   |                     | Symbol that is placed top-left of the Component         |
| title     | string  |    No    | ''                  | Title that is used for the element                      |
| value     | number  |    Yes   |                     | Value that is used to determine the coloring to be used |

*Constants*
*---------*

n/a

**DateEntry**
~~~~~~~~~

*Overview*
*--------*

Field for entering Dates into the application. Clicking on the icon opens up a date picker

*Example Usage*
*-------------*

`import { DateEntry } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<DateEntry label={ENTRY_FIELD_LABEL} testId="testId" value={ENTRY_FIELD_VALUE} />`
Uses the defaults as per the properties below
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| disabled      | boolean  |    No    | false          | Disables the component if true                          |
| errorText     | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText    | string   |    No    | ''             | Displayed is there is a value                           |
| label         | string   |    Yes   |                | Label displayed for the Component                       |
| required      | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue      | function |    No    | null           | Used to update the value onChange                       |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| value         | string   |    Yes   |                | Value that is displayed within the component            |

*Constants*
*---------*

n/a

**NumberEntry**
~~~~~~~~~~~

*Overview*
*--------*

Field for entering numbers into the application. Provides a spinner

*Example Usage*
*-------------*

`import { NumberEntry } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<NumberEntry label={ENTRY_FIELD_LABEL} testId="testId" value={ENTRY_FIELD_VALUE} />`
Uses the defaults as per the properties below
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| disabled      | boolean  |    No    | false          | Disables the component if true                          |
| errorText     | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText    | string   |    No    | ''             | Displayed is there is a value                           |
| label         | string   |    Yes   |                | Label displayed for the Component                       |
| password      | boolean  |    No    | false          | Value entered is obscured                               |
| prefix        | string   |    No    | ''             | Allows for the addition of characters before the number |
| required      | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue      | function |    No    | null           | Used to update the value onChange                       |
| suffix        | string   |    No    | ''             | Allows for the addition of characters after the number  |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| value         | string   |    Yes   |                | Value that is displayed within the component            |

*Constants*
*---------*

n/a

**TextEntry**
~~~~~~~~~

*Overview*
*--------*

Field for entering text into the application

*Example Usage*
*-------------*

`import { TextEntry } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<TextEntry label={ENTRY_FIELD_LABEL} testId="testId" value={ENTRY_FIELD_VALUE} />`
Uses the defaults as per the properties below
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| disabled      | boolean  |    No    | false          | Disables the component if true                          |
| errorText     | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText    | string   |    No    | ''             | Displayed is there is a value                           |
| label         | string   |    Yes   |                | Label displayed for the Component                       |
| password      | boolean  |    No    | false          | Value entered is obscured                               |
| prefix        | string   |    No    | ''             | Allows for the addition of characters before the number |
| required      | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| rows          | number   |    No    | 1              | TEXT ONLY.  text area when value is above 1             |
| setValue      | function |    No    | null           | Used to update the value onChange                       |
| suffix        | string   |    No    | ''             | Allows for the addition of characters after the number  |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| value         | string   |    Yes   |                | Value that is displayed within the component            |

*Constants*
*---------*

n/a

**DropDown**
~~~~~~~~~

*Overview*
*--------*

Field for selecting an option from a possible list

*Example Usage*
*-------------*

`import { DropDown } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<DropDown label={DROP_DOWN_LABEL} options={DROP_DOWN_OPTIONS} testId="testId" value={DROP_DOWN_VALUE} />`
Uses the defaults as per the properties below
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| disabled      | boolean  |    No    | false          | Disables the component if true                          |
| errorText     | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText    | string   |    No    | ''             | Displayed is there is a value                           |
| label         | string   |    Yes   |                | Label displayed for the Component                       |
| options       | *****    |    Yes   |                | Options to be displayed for selection.  See below       |
| required      | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue      | function |    No    | null           | Used to update the value onChange                       |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| value         | string   |    Yes   |                | Value that is displayed within the component            |

*OPTIONS* 
*-------*

| Property        | Type              |  Notes                                                   |
| --------------- | ----------------- | -------------------------------------------------------- |
| label           | string            | Label displayed within the list of options               |
| value           | string / number   | Value associated to the displayed label                  |

*Constants*
*---------*

n/a

**Footer**
~~~~~~~~~

*Overview*
*--------*

Standard Footer wrapper component that spaces evenly it's child components

*Example Usage*
*-------------*

`import { Footer } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<Footer testId="testId">
  <Grid item>THIS</Grid>
  <Grid item>IS</Grid>
  <Grid item>THE</Grid>
  <Grid item>FOOTER</Grid>
</Footer>`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |

*Constants*
*---------*

n/a

**Header**
~~~~~~~~~

*Overview*
*--------*

Standard Header wrapper component that spaces evenly it's child components.  
Also contains SKAO Logo and button for Theme toggling

*Example Usage*
*-------------*

`import { Header } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<Header testId="testId" themeToggle={themeToggle}>
  <Grid item>THIS</Grid>
  <Grid item>IS</Grid>
  <Grid item>THE</Grid>
  <Grid item>HEADER</Grid>
</Header>`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |
| themeToggle   | Function |    No    | null           | If provided, the theme toggling button is displayed     |
| toolTip       | Object   |    No    | all values ''  | Contains toolTip text for display (See below)           |

ToolTip values  ( Translated values should be passed in as an override )

| Property      | Type     | Required | Default              | Notes                                             |
| ------------- | -------- | -------- | -------------------- | ------------------------------------------------- |
! skao          | string   | No       | 'SKAO WebSite'       | ToolTip for the SKAO Logo                         |
| mode          | string   | No       | 'Light / Dark Mode'  | ToolRip for the Theme mode                        |

*Constants*
*---------*

n/a

**InfoCard**
~~~~~~~~~

*Overview*
*--------*

Component providing standard delivery of information/errors/warnings

*Example Usage*
*-------------*

`import { InfoCard } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<InfoCard filled={INFO_FILLED} level={INFO_LEVEL} message={INFO_MESSAGE} testId="testId" />`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| clickFunction | Function |    No    | null           | Executed if the component is clicked                    |
| filled        | boolean  |    No    | false          | Determines if component is filled or outlined           |
| fontSize      | number   |    No    | 35             | Determines the size of the displayed text/symbol        |
| level         | number   |    Yes   |                | Symbol that is placed top-left of the Component         |
| message       | string   |    Yes   |                | Title that is used for the element                      |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |

*Constants*
*---------*

n/a

**DataTree**
~~~~~~~~~

*Overview*
*--------*

Passing data out of a JSON.parse() will produce an expandable TreeView of the data

*Example Usage*
*-------------*

`import { DataTree } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<DataTree data={data} testId="testId" />`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| data          | number   |    Yes   | ''             | Symbol that is placed top-left of the Component         |
| height        | number   |    No    | 264            | Determines the height that the component will use       |
| maxWidth      | number   |    No    | 400            | Determines the width that the component will use        |
| testId        | string   |    Yes   |                | Identifier for testing purposes                         |

*Constants*
*---------*

n/a

**ButtonToggle**
~~~~~~~~~

*Overview*
*--------*

Button group showing 2 options, one of which must be active

*Example Usage*
*-------------*

`import { ButtonToggle } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<ButtonToggle data={data} testId="testId" />`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| current       | string   |    Yes   |                | Value of the currently active element                   |
| label         | string   |    Yes   |                | aria-label value                                        |
| options       | object   |    Yes   |                | { id: string, label: string, value: any}[]  Max 2       |
| setValue      | function |    Yes   |                | Function to update the value when clicked               |
| testId        | string   |    No    | SPECIAL        | Value is "telescopeSelectorId" for this component       |
| toolTip       | string   |    No    | ''             | Optional toolTip for the toggle                         |
| value         | object   |    Yes   |                | Object of the currently active element                  |

*Constants*
*---------*

n/a

**TelescopeSelection**
~~~~~~~~~

*Overview*
*--------*

Specialized selection of a specific telescope from all available

*Example Usage*
*-------------*

`import { TelescopeSelection } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<TelescopeSelection data={data} testId="testId" />`
```

*Properties*
*----------*

| Property        | Type     | Required | Default        | Notes                                                   |
| --------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| ariaDescription | string   |    No    | ''             | Description that is used by screen readers              | 
| ariaTitle       | string   |    No    | ''             | Title that is used by screen readers                    |
| current         | string   |    Yes   |                | Value of the currently active element                   |
| disabled        | boolean  |    No    | false          | disable/enable the component                            |
| setValue        | function |    Yes   |                | Function to update the value when clicked               |
| testId          | string   |    Yes   |                | Identifier for testing purposes                         |
| toolTip         | string   |    No    | ''             | Optional toolTip for the toggle                         |
| value           | object   |    Yes   |                | Object of the currently active element                  |

*Constants*
*---------*

n/a

**Button**
~~~~~

*Overview*
*--------*

Button for use with all applications

*Example Usage*
*-------------*

`import { Button, ButtonColorType, ButtonVariantType } from '@ska-telescope/ska-gui-components';`
Needs to be placed at the top of the source file
```

`<Button data={data} testId="testId" />`
Note that the elements need to be provided as Grid items
```

*Properties*
*----------*

| Property      | Type        | Required | Default        | Notes                                                       |
| ------------- | ----------- | -------- | -------------- | ----------------------------------------------------------- |
| color         | string      |    No    |                | Color options : ButtonColorType                             |
| disabled      | boolean     |    No    | false          | Disabled when true                                          |
| icon          | JSX.Element |    No    | null           | Prefixes the label when present                             |
| label         | string      |    Yes   |                | Test displayed upon the button                              |
| onClick       | Function    |    No    | null           | Determines actions to be taken when the button is clicked   |
| testId        | string      |    Yes   |                | Identifier for testing purposes                             |
| toolTip       | string      |    No    | ''             | Text displayed when the cursor is hovered over the button   |
| variant       | string      |    No    | 'outlined'     | Styling options : ButtonVariantType                         |

*Constants*
*---------*

ButtonColorType : One of the following. 'error' | 'inherit' | 'secondary' | 'success' | 'warning'
ButtonVariantType : One of the following. 'contained' | 'outlined' | 'text'
