# SKA GUI Components

This library contains standard GUI components, written in TypeScript.  
Their usage is able to be viewed by use of Storybook.
They have been tested using Cypress.
SKAO Theme has been implemented and has been imported from ska-javascript-components.

## Adding library to your application

See /docs/src/usage.rst
## Updating the CI/CD processor

See /docs/src/usage.rst

```
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

See /docs/src/functionality.rst