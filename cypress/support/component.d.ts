import './commands';
import '@cypress/code-coverage/support';
import { mount } from 'cypress/react18';
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
