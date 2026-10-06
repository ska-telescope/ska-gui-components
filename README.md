# SKA GUI Components

This library follows [Semantic Versioning](https://semver.org/).

This library contains standard GUI components, written in TypeScript.
Their usage is able to be viewed by use of Storybook.
They have been tested using Cypress.
SKAO Theme has been implemented.

## Adding library to your application

See /docs/src/usage.rst

### Controlled components

The React Hook Form controlled components are available from a separate entry point, so React Hook Form is only required when using them:

```tsx
import {
  ControlledSelect,
  ControlledTextField,
} from '@ska-telescope/ska-gui-components/controlled';
```

Install `react-hook-form` in applications that use this entry point and render the components inside a `FormProvider`. The standard package entry point does not export or require the controlled components.

## Updating the CI/CD processor

See /docs/src/usage.rst

```
```

## Adding a component to the library

Add the component in the normal way; using storybook should help with this.

## Releasing

1. `make bump-patch-release`, `make bump-minor-release` or `make bump-major-release`
2. Update `CHANGELOG.md`, commit, and merge to `main`
3. On `main`: `make git-create-tag`, then `make git-push-tag`

## Components available within this library

See /docs/src/functionality.rst