# SKA GUI Components

This library contains standard GUI components, written in TypeScript.   
Their usage is able to be viewed by use of Storybook
They have been tested using Cypress
SKAO Theme has been implemented and has been imported from ska-javascript-components

## Adding the library to your application

This repository is available from the Central Artefact Repository ( CAR ), so the following needs to
be executed from the repository that needs to use this library

> npm config set registry https://artefact.skao.int/repository/npm-internal/

> yarn add @ska-telescope/ska-gui-components   ( npm can be used as an alternative )

Once this has run successfully, then you should run the following, so that the default
registry usage is restored.

> npm config set registry https://registry.npmjs.org/

## Updating the Ci/CD processor

As the library is in an SKAO location, the .gitlab-ci.yml should be amended to the following so that the Ci/CD build will complete

  script:
    - npm config set registry https://artefact.skao.int/repository/npm-internal/
    - yarn build  ( npm can be used here as an alternative )
    - npm config set registry https://registry.npmjs.org/

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

> git tag -a v1.4 -m 'version 1.4'

NB: I have found that you will need to tag within the git website, so I recommend that both are done

4. Merge as usual, with a passing pipeline

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
