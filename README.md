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
7. Enter the tag name in the form n.n.n  ( eg. 0.1.2 ).
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
| level     | number  |    Yes   | ''                  | Title that is placed top-left of the Component          |
| title     | string  |    No    | ''                  | Title that is used for the element                      |
| value     | number  |    Yes   | 9                   | Value that is used to determine the coloring to be used |
| hideValue | boolean |    No    | false               | IF true, display of <strong>value<strong> is suppressed |

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

<Header id="theHeader" themeToggle={themeToggle}>
  <Grid item>THIS</Grid>
  <Grid item>IS</Grid>
  <Grid item>THE</Grid>
  <Grid item>HEADER</Grid>
</Header>

```