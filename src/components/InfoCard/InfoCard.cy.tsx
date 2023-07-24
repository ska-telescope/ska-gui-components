import React from 'react';
import InfoCard from './InfoCard';

describe('<InfoCard />', () => {
  it('renders : outlined', () => {
    cy.mount(<InfoCard level={1} message="infoCard.message" />);
  });
  it('renders : filled', () => {
    cy.mount(<InfoCard level={1} message="infoCard.message" filled />);
  });
});
