import React from 'react';
import { StatusIcon } from './StatusIcon';

const stats = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('<Status />', () => {
  it('Status default renders', () => {
    cy.mount(<StatusIcon testId="statusTestId" />);
  });

  for (const i of stats) {
    it('Status ' + i + ' renders', () => {
      cy.mount(
        <StatusIcon testId="statusTestId" level={i}>
          17
        </StatusIcon>,
      );
    });
    it('Status ' + i + ' renders with text', () => {
      cy.mount(
        <StatusIcon testId="statusTestId" level={i} text={i.toString()}>
          17
        </StatusIcon>,
      );
    });
    it('Status ' + i + ' renders with text & icon', () => {
      cy.mount(
        <StatusIcon testId="statusTestId" icon level={i} size={100} text={i.toString()}>
          17
        </StatusIcon>,
      );
    });
  }
});
