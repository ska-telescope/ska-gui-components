# SKA GUI Components

This library contains standard GUI components, written in TypeScript.  
Their usage is able to be viewed by use of Storybook.
They have been tested using Cypress.
SKAO Theme has been implemented and has been imported from ska-javascript-components.

## Adding library to your application

This repository is available from the Central Artefact Repository ( CAR ), so the following needs to
be executed from the repository that needs to use this library

```
npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/

yarn add @ska-telescope/ska-gui-components   ( npm can be used as an alternative )
```

## Updating the Ci/CD processor

As the library is in an SKAO location, the .gitlab-ci.yml should be amended to the following so that the Ci/CD build will complete

```
npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/

yarn build  ( npm can be used here as an alternative )
```

## Adding a component to the library

1. Add the component in the normal way; using storybook should help with this.
2. Update the version number within package.json.
3. Merge as usual, with a passing pipeline.
4. Once the merge has completed, the tag will need to be added in git.
5. Locate and select the 'Tags' submenu item.
6. Click on New Tag, located towards the top-right of the page.
7. Enter the tag name in the form n.n.n ( eg. 0.1.2 ).
8. Ensure that the 'Create from' is set to the default branch of the repository.
9. Enter an appropriate Message.
10. Click 'Create tag'.

This will run the CI/CD process again, and once complete the executable will be associated by the version

## Components available within this library

### AlertCard

Component that is colored dependant upon the most-urgent status value provided

```
import { AlertCard } from '@ska-telescope/ska-gui-components';

<AlertCard title={ALERT_CARD_TITLE} array={ALERT_CARD_DATA} filled={ALERT_CARD_FILLED} />

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| title         | string   |    Yes   | ''             | Title that is placed top-left of the Component          |
| filled        | boolean  |    No    | false          | Determines if component is filled or outlined           |
| array         | array    |    Yes   |                | See below                                               |
| clickFunction | Function |    No    |                | Executed if the component is clicked                    |

array element values

| Property  | Type    | Required | Default             | Notes                                                   |
| --------- | ------- | -------- | ------------------- | ------------------------------------------------------- |
| level     | number  |    Yes   | ''                  | Symbol that is placed top-left of the Component         |
| title     | string  |    No    | ''                  | Title that is used for the element                      |
| value     | number  |    Yes   | 9                   | Value that is used to determine the coloring to be used |
| hideValue | boolean |    No    | false               | IF true, display of <strong>value<strong> is suppressed |

```

### DateEntry

Field for entering Dates into the application. Clicking on the icon opens up a date picker

```
import { DateEntry } from '@ska-telescope/ska-gui-components';

<DateEntry label={ENTRY_FIELD_LABEL} value={ENTRY_FIELD_VALUE} />

| Property        | Type     | Required | Default        | Notes                                                   |
| --------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| label           | string   |    Yes   | ''             | Label displayed for the Component                       |
| value           | string   |    Yes   | n/a            | Value that is displayed within the component            |
| disabled        | boolean  |    No    | false          | Disables the component if true                          |
| errorText       | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText      | string   |    No    | ''             | Displayed is there is a value                           |
| required        | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue        | function |    No    | null           | Used to update the value onChange                       |
```

### NumberEntry

Field for entering numbers into the application. Provides a spinner

```
import { NumberEntry } from '@ska-telescope/ska-gui-components';

<NumberEntry label={ENTRY_FIELD_LABEL} value={ENTRY_FIELD_VALUE} />

| Property        | Type     | Required | Default        | Notes                                                   |
| --------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| label           | string   |    Yes   | ''             | Label displayed for the Component                       |
| value           | string   |    Yes   | n/a            | Value that is displayed within the component            |
| disabled        | boolean  |    No    | false          | Disables the component if true                          |
| errorText       | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText      | string   |    No    | ''             | Displayed is there is a value                           |
| password        | boolean  |    No    | false          | Value entered is obscured                               |
| prefix          | string   |    No    | ''             | Allows for the addition of characters before the number |
| required        | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue        | function |    No    | null           | Used to update the value onChange                       |
| suffix          | string   |    No    | ''             | Allows for the addition of characters after the number  |
```

### TextEntry

Field for entering text into the application

```
import { TextEntry } from '@ska-telescope/ska-gui-components';

<TextEntry label={ENTRY_FIELD_LABEL} value={ENTRY_FIELD_VALUE} />

| Property        | Type     | Required | Default        | Notes                                                   |
| --------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| label           | string   |    Yes   | ''             | Label displayed for the Component                       |
| value           | string   |    Yes   | n/a            | Value that is displayed within the component            |
| disabled        | boolean  |    No    | false          | Disables the component if true                          |
| errorText       | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText      | string   |    No    | ''             | Displayed is there is a value                           |
| password        | boolean  |    No    | false          | Value entered is obscured                               |
| prefix          | string   |    No    | ''             | Allows for the addition of characters before the number |
| required        | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| rows            | number   |    No    | 1              | TEXT ONLY.  text area when value is above 1             |
| setValue        | function |    No    | null           | Used to update the value onChange                       |
| suffix          | string   |    No    | ''             | Allows for the addition of characters after the number  |
```
### DropDown

Field for selecting an option from a possible list

```
import { DropDown } from '@ska-telescope/ska-gui-components';

<DropDown label={DROP_DOWN_LABEL} options={DROP_DOWN_OPTIONS} value={DROP_DOWN_VALUE} />

| Property        | Type     | Required | Default        | Notes                                                   |
| --------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| disabled        | boolean  |    No    | false          | Disables the component if true                          |
| errorText       | string   |    No    | ''             | Displayed if there is a value and component is coloured |
| helperText      | string   |    No    | ''             | Displayed is there is a value                           |
| label           | string   |    Yes   | ''             | Label displayed for the Component                       |
| options         | BELOW    |    Yes   | ''             | Options to be displayed for selection.  See below       |
| required        | boolean  |    No    | false          | Asterisk is added to the label if true                  |
| setValue        | function |    No    | null           | Used to update the value onChange                       |
| value           | string   |    Yes   | n/a            | Value that is displayed within the component            |

OPTIONS 

| Property        | Type              |  Notes                                                   |
| --------------- | ----------------- | -------------------------------------------------------- |
| label           | string            | Label displayed within the list of options               |
| value           | string / number   | Value associated to the displayed label                  |
```
### Footer

Standard Footer wrapper component that spaces evenly it's child components

```
import { Footer } from '@ska-telescope/ska-gui-components';

<Footer>
  <Grid item>THIS</Grid>
  <Grid item>IS</Grid>
  <Grid item>THE</Grid>
  <Grid item>FOOTER</Grid>
</Footer>

```

### Header

Standard Header wrapper component that spaces evenly it's child components.  
Also contains SKAO Logo and button for Theme toggling

```
import { Header } from '@ska-telescope/ska-gui-components';

| Property      | Type     | Required | Default        | Notes                                                   |
| ------------- | -------- | -------- | -------------- | ------------------------------------------------------- |
| themeToggle   | Function |    No    | null           | If provided, the theme toggling button is displayed     |
| toolTip       | Object   |    No    | all values ''  | Contains toolTip text for display (See below)           |

ToolTip values  ( Translated values should be passed in as an override )

| Property      | Type     | Required | Default              | Notes                                             |
| ------------- | -------- | -------- | -------------------- | ------------------------------------------------- |
! skao          | string   | No       | 'SKAO WebSite'       | ToolTip for the SKAO Logo                         |
| mode          | string   | No       | 'Light / Dark Mode'  | ToolRip for the Theme mode                        |


<Header id="theHeader" themeToggle={themeToggle}>
  <Grid item>THIS</Grid>
  <Grid item>IS</Grid>
  <Grid item>THE</Grid>
  <Grid item>HEADER</Grid>
</Header>
```

### InfoCard

Component that provides a standard delivery of information/errors/warnings

```
import { InfoCard } from '@ska-telescope/ska-gui-components';

<InfoCard level={INFO_LEVEL} message={INFO_MESSAGE} filled={INFO_FILLED} />

| Property      | Type     | Required | Default             | Notes                                                   |
| ------------- | -------- | -------- | ------------------- | ------------------------------------------------------- |
| level         | number   |    Yes   | ''                  | Symbol that is placed top-left of the Component         |
| message       | string   |    Yes   | ''                  | Title that is used for the element                      |
| filled        | boolean  |    No    | false               | Determines if component is filled or outlined           |
| fontSize      | number   |    No    | 35                  | Determines the size of the displayed text/symbol        |
| clickFunction | Function |    No    |                     | Executed if the component is clicked                    |

```
### DataTree

Passing data out of a JSON.parse() will produce an expandable TreeView of the data

```
import { DataTree } from '@ska-telescope/ska-gui-components';

<DataTree data={data} />

| Property      | Type     | Required | Default             | Notes                                                   |
| ------------- | -------- | -------- | ------------------- | ------------------------------------------------------- |
| data          | number   |    Yes   | ''                  | Symbol that is placed top-left of the Component         |
| height        | number   |    No    | 264                 | Determines the height that the component will use       |
| maxWidth      | number   |    No    | 400                 | Determines the width that the component will use        |
```
### ButtonToggle

Button group showing 2 options, one of which must be active.

```
import { ButtonToggle } from '@ska-telescope/ska-gui-components';

<ButtonToggle data={data} />

| Property      | Type     | Required | Default             | Notes                                                   |
| ------------- | -------- | -------- | ------------------- | ------------------------------------------------------- |
| current       | string   |    Yes   |                     | Value of the currently active element                   |
| label         | string   |    Yes   |                     | aria-label value                                        |
| options       | object   |    Yes   |                     | { id: string, label: string, value: any}[]  Max 2       |
| setValue      | function |    Yes   |                     | Function to update the value when clicked               |
| toolTip       | string   |    No    | ''                  | Optional toolTip for the toggle                         |
| value         | object   |    Yes   |                     | Object of the currently active element                  |

```