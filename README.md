# SKA GUI Components

This library contains standard GUI components, written in TypeScript.   
Their usage is able to be viewed by use of Storybook
They have been tested using Cypress
SKAO Theme has been implemented and has been imported from ska-javascript-components

## Adding library to your application

This repository is available from the Central Artefact Repository ( CAR ), so the following needs to
be executed from the repository that needs to use this library

```
npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/

yarn add @ska-telescope/ska-gui-components   ( npm can be used as an alternative )

## Updating the Ci/CD processor

As the library is in an SKAO location, the .gitlab-ci.yml should be amended to the following so that the Ci/CD build will complete

  script:
    - npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/
    - yarn build  ( npm can be used here as an alternative )

## Using a component from the library

This is a simple example of how to implement a component from this library ( in this case the AlertCard ).
Import the component from the library as indicated below

> import { AlertCard } from '@ska-telescope/ska-gui-components';

This is now able to be used like any other component; below is an illustrative example

> <AlertCard title='Title of AlertCard' array={alertCardArray} />

## Adding a component to the library

1. Add the component in the normal way; using storybook should help with this
2. Update the version number within package.json
3. Tag the version ( example below )
4. Merge as usual, with a passing pipeline.
5. Once the merge has completed, the tag will need to be added in git.
  5a. Locate and select the 'Tags' submenu item
  5b. Click on New Tag, located towards the top-right of the page.
  5c. Enter the tag name in the form n.n.n  ( eg. 0.1.2 )
  5d. Ensure that the 'Create from' is set to 'master'.
  5e. Enter an appropriate Message
  5f. Click 'Create tag'.

This will run the CI/CD process again, and once complete the executable will be associated by the version

## Components available within this library
### AlertCard

Properties {
  title: string;
  filled?: boolean;
  array: { level: number; title: string; value: number; hideValue: boolean }[];
  clickFunction?: Function;
}

### Menu

Properties {
  menuItems: Function;
  topMenu?: boolean;
}
