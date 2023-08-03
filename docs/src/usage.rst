**Usage**
~~~~~

.. admonition:: Configuration Addition

    This repository is available from the Central Artefact Repository ( CAR ), so the following needs 
    to be executed from the repository that needs to use this library

    - `npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/`

.. admonition:: Update the CI/CD processor

    As the library is in an SKAO location, the .gitlab-ci.yml should be amended to the following so 
    that the Ci/CD build will complete

    - `npm config set @ska-telescope:registry https://artefact.skao.int/repository/npm-internal/`
    - `yarn build`  ( npm can be used here as an alternative )

.. admonition:: Required addition to packagejson 

    As these are designed for use with React applications, the following needs to be run so that 
    the library is added to the package.json 

    - `yarn add @ska-telescope/ska-gui-components`   ( npm can be used as an alternative )

    Note that this will additionally provide access to all functionality within the `ska-javascript-components`

.. admonition:: Addition into the JS/TS code

    Implementation of the specific components vary and are detailed in later documentation, 
    but the following format will need to be added at the top of each file where a component is to be used

    - `import { ??????? } from "@ska-telescope/ska-gui-components";`

